const User = require('../models/User');
const Payment = require('../models/Payment');


exports.getOverview = async (req, res) => {
  const [totalUsers, activeSubscribers, revenueAgg] = await Promise.all([
    User.countDocuments({}),
    User.countDocuments({ isSubscribed: true }),
    Payment.aggregate([
      { $match: { status: 'active', createdAt: { $gte: new Date(Date.now() - 30*24*60*60*1000) } } },
      { $group: { _id: null, amount: { $sum: '$amount' } } } 
    ])
  ]);

  res.json({
    totalUsers,
    activeSubscribers,
    last30dRevenue: ((revenueAgg[0]?.amount || 0) / 100)
  });
};


exports.getUsers = async (req, res) => {
  const { q = '', page = 1, limit = 20, subscribed } = req.query;

  const where = {};
  if (q) {
    where.$or = [
      { email: new RegExp(q, 'i') },
      { name: new RegExp(q, 'i') },
      { phone: new RegExp(q, 'i') }
    ];
  }
  if (subscribed === 'true') where.isSubscribed = true;
  if (subscribed === 'false') where.isSubscribed = false;

  const skip = (Number(page) - 1) * Number(limit);
  const [items, total] = await Promise.all([
    User.find(where).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)).lean(),
    User.countDocuments(where)
  ]);

  res.json({ items, total, page: Number(page), pages: Math.ceil(total / limit) });
};


exports.getPayments = async (req, res) => {
  const { page = 1, limit = 20, status } = req.query;
  const where = status ? { status } : {};

  const skip = (Number(page) - 1) * Number(limit);
  const [items, total] = await Promise.all([
    Payment.find(where).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)).lean(),
    Payment.countDocuments(where)
  ]);

  res.json({ items, total, page: Number(page), pages: Math.ceil(total / limit) });
};


exports.toggleUserSubscription = async (req, res) => {
  const { isSubscribed, subscriptionPlan, subscriptionEnd } = req.body;

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      isSubscribed,
      subscriptionPlan: subscriptionPlan ?? undefined,
      subscriptionAt: isSubscribed ? new Date() : undefined,
      subscriptionEnd: subscriptionEnd ? new Date(subscriptionEnd) : undefined,
    },
    { new: true }
  ).lean();

  if (!user) return res.status(404).json({ msg: 'User not found' });
  res.json(user);
};
