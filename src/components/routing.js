//importing the files need to make this routing work, namely the individual pages: Home, Inventory, Contact and Page not found
//as well as the Route/Routes fro react router dom

import Home from "../pages/Home";
import Inventory from "../pages/Inventory";
import Contact from "../pages/Contact";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./PageNotFound";

export default function Routing(props) {
  return (
    <Routes>
      {/* if the route is to /home, it will show the Home page */}
      <Route path="/home" element={<Home />} />
      {/* if the route is to /inventory it will show the inventory page*/}
      <Route path="/inventory" element={<Inventory />} />
      {/* if the route is to /contact-us it will show the contact page */}
      <Route path="/contact-us" element={<Contact />} />
      {/* if the route is to /anything else it will show the page not found page */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
