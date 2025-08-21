// components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-4 text-sm text-white bg-[#960000]">
      {/* Left Section */}
      <div className="text-center md:text-left mb-2 md:mb-0">
        © {new Date().getFullYear()} TAP (The Amazing Pint). All rights reserved.
        <br />
        Managed & Powered by{" "}
        <a
          href="https://advolve.in"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          ADVOLVE
        </a>
      </div>

      {/* Right Section */}
      <div className="flex space-x-4">
        <a href="/terms-and-conditions" className="hover:underline">
          Terms & Conditions
        </a>
        <span className="text-gray-300">|</span>
        <a href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </a>
        <span className="text-gray-300">|</span>
        <a href="/refund-and-cancellation" className="hover:underline">
          Refund & Cancellation
        </a>
      </div>
    </footer>
  );
}
