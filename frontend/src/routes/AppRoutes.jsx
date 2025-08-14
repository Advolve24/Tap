import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import ThankYou from "../pages/ThankYou";
import CheckoutFailed from "../pages/CheckoutFailed";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/checkout-failed" element={<CheckoutFailed />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}