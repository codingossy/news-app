import { useState } from "react";
import "./App.css";
import Header from "./components/navbar/Header";
import MobileNav from "./components/navbar/MobileNav";
import NewsList from "./components/NewsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Business from "./pages/Business";
import Breaking from "./pages/Breaking";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";
import Entertainment from "./pages/Entertainment";

function App() {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <div className="">
      <Router>
        <Header setNavMobile={setNavMobile} />
        <div className={`${navMobile ? "-right-0" : "-right-full"} toggle `}>
          <MobileNav setNavMobile={setNavMobile} />
        </div>
        {/* header ends */}
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/business" element={<Business />} />
          <Route path="/tech" element={<Technology />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/entertainment" element={<Entertainment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
