import Home from "../pages/Home";
import Inventory from "../pages/Inventory";
import Contact from "../pages/Contact";
import { Routes, Route } from "react-router-dom";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
}
