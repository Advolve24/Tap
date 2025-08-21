import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import ThankYou from "../pages/ThankYou";
import CheckoutFailed from "../pages/CheckoutFailed";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/checkout-failed" element={<CheckoutFailed />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}