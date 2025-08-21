import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Terms & Conditions — <span className="text-[#ffe101]">TAP</span> (The Amazing Pint)
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          <span className="font-medium">Effective Date:</span> [Insert Date] <br />
          <span className="font-medium">Last Updated:</span> [Insert Date]
        </p>
        <p className="text-gray-700 mb-8">
          Welcome to <span className="font-semibold">TAP (The Amazing Pint)</span>. By subscribing
          to or accessing our e-magazine and related digital services, you agree to these Terms &
          Conditions. If you do not agree, please do not use the Services.
        </p>

        <div className="space-y-8">
          {[
            {
              title: "1. Subscription Plans & Auto-Renewal",
              content: [
                "TAP is available on a subscription basis, including 6-month and 12-month plans.",
                "Subscriptions are set to auto-renew at the end of each term unless cancelled in advance.",
                "Renewal fees will be charged at the then-current price using your saved payment method.",
              ],
            },
            {
              title: "2. Paywall & Access",
              content: [
                "Non-subscribers may view limited previews of content.",
                "Full content access is restricted to active subscribers for the duration of their plan.",
              ],
            },
            {
              title: "3. Payments, Cancellations & Refunds",
              content: [
                "All subscription fees are processed securely by our payment partners.",
                "All payments are non-refundable, including for partial terms, unused access, or early cancellations.",
                "You may cancel anytime via your account dashboard. Cancellation stops future renewals, but your current access will remain active until the end of the paid term.",
              ],
            },
            {
              title: "4. Account & Security",
              content: [
                "You are responsible for maintaining the confidentiality of your account credentials.",
                "Accounts may not be shared or used by multiple individuals.",
                "We reserve the right to suspend or terminate accounts for misuse, abuse, or fraud.",
              ],
            },
            {
              title: "5. Intellectual Property",
              content: [
                "All website design, digital magazine content, graphics, and branding are the property of TAP and/or its licensors.",
                "Subscribers are granted a limited, non-exclusive license to access content for personal use only.",
                "Copying, redistribution, or commercial use of content without written consent is prohibited.",
              ],
            },
            {
              title: "6. Service Availability & Changes",
              content: [
                "We may update, enhance, or remove content and features from time to time.",
                "While we aim to ensure uninterrupted service, we do not guarantee availability at all times.",
              ],
            },
            {
              title: "7. Disclaimers & Liability",
              content: [
                "TAP is provided on an “as-is” and “as-available” basis.",
                "Content is informational only. We do not provide professional, financial, or legal advice.",
                "To the extent permitted by law, TAP is not liable for any damages, losses, or interruptions arising from use of the Services.",
              ],
            },
            {
              title: "8. Governing Law",
              content: [
                "These Terms are governed by the laws of India.",
                "Any disputes will fall under the exclusive jurisdiction of the courts in [Insert City, State].",
              ],
            },
            {
              title: "9. Updates to Terms",
              content: [
                "We may update these Terms periodically. The “Last Updated” date will reflect any revisions.",
                "Continued use of the Services after updates means you accept the revised Terms.",
              ],
            },
            {
              title: "10. Contact Us",
              content: [
                "📧 Email: support@theamazingpint.com",
                "📞 Phone/WhatsApp: +91-9156236277",
                "📍 Address: [Insert Registered Business Address]",
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {section.title}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {section.content.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
