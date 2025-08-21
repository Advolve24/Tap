import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Privacy Policy — <span className="text-amber-600">TAP</span> (The Amazing Pint)
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          <span className="font-medium">Effective Date:</span> [Insert Date] <br />
          <span className="font-medium">Last Updated:</span> [Insert Date]
        </p>

        <p className="text-gray-700 mb-8">
          At <span className="font-semibold">TAP (The Amazing Pint)</span>, we value your trust and
          are committed to protecting your privacy. This Privacy Policy explains how we collect, use,
          and safeguard your information when you access our e-magazine and related digital services.
        </p>

        <div className="space-y-8">
          {[
            {
              title: "1. Information We Collect",
              content: [
                "Personal Information: Name, email address, phone number, billing details, and subscription preferences.",
                "Usage Data: Device information, browser type, IP address, and activity logs when using our website or app.",
                "Cookies & Tracking: We use cookies and similar technologies to improve user experience and analyze trends.",
              ],
            },
            {
              title: "2. How We Use Your Information",
              content: [
                "To provide and manage your subscription services.",
                "To process payments securely via trusted payment partners.",
                "To send updates, newsletters, promotional offers, and service-related communications.",
                "To enhance user experience and improve our platform.",
              ],
            },
            {
              title: "3. Sharing of Information",
              content: [
                "We do not sell or rent your personal information to third parties.",
                "We may share information with trusted service providers (e.g., payment gateways, hosting providers) strictly for service delivery.",
                "We may disclose information if required by law or to protect our rights, safety, and property.",
              ],
            },
            {
              title: "4. Data Security",
              content: [
                "We implement industry-standard security measures to protect your data.",
                "However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.",
              ],
            },
            {
              title: "5. Your Rights",
              content: [
                "You can access, update, or delete your personal information through your account dashboard.",
                "You may opt out of marketing emails by clicking 'Unsubscribe' in any email communication.",
                "You may request data deletion or portability by contacting us directly.",
              ],
            },
            {
              title: "6. Cookies & Tracking Technologies",
              content: [
                "Cookies are small files stored on your device to improve site functionality and personalize content.",
                "You can manage or disable cookies in your browser settings, though some features may not function properly.",
              ],
            },
            {
              title: "7. Third-Party Links",
              content: [
                "Our website may contain links to third-party websites.",
                "We are not responsible for the privacy practices or content of those sites.",
              ],
            },
            {
              title: "8. Children's Privacy",
              content: [
                "Our services are not intended for individuals under 13 years of age.",
                "We do not knowingly collect data from children. If you believe we have, please contact us for removal.",
              ],
            },
            {
              title: "9. Changes to This Policy",
              content: [
                "We may update this Privacy Policy from time to time.",
                "The 'Last Updated' date will reflect any revisions.",
                "Continued use of our services after changes means you accept the updated policy.",
              ],
            },
            {
              title: "10. Contact Us",
              content: [
                "📧 Email: support@theamazingpint.com",
                "📞 Phone/WhatsApp: +91-9876543210 (Mon–Sat, 10:00 AM – 6:00 PM IST)",
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

export default PrivacyPolicy;
