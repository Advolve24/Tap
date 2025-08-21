// components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="text-center p-4 text-sm text-white bg-[#960000]">
      © {new Date().getFullYear()} TAP (The Amazing Pint). All rights reserved.
      <br />
      Managed & Powered by{" "}
      <a
        href="https://advolve.in"
        target="_blank"
        rel="noopener noreferrer"
      >
        ADVOLVE
      </a>
      <br />
      <a href="/terms-and-conditions">
        Terms & Conditions
      </a>{" "}
      |{" "}
      <a href="/privacy-policy" >
        Privacy Policy
      </a>{" "}
      |{" "}
      <a href="/refund-and-cancellation" >
        Refund & Cancellation
      </a>
    </footer>
  );
}
