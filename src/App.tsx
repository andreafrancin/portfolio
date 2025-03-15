import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContainer from "./pages/home";
import AboutContainer from "./pages/about";
import ContactContainer from "./pages/contact";
import DesignContainer from "./pages/design";
import IllustrationContainer from "./pages/illustration";
import ProjectContainer from "./pages/project";

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<HomeContainer />} />
        <Route path="/about" element={<AboutContainer />} />
        <Route path="/contact" element={<ContactContainer />} />
        <Route path="/design" element={<DesignContainer />} />
        <Route path="/illustration" element={<IllustrationContainer />} />
        <Route path="/design/:id" element={<ProjectContainer />} />
        <Route path="/illustration/:id" element={<ProjectContainer />} />
        <Route path="*" element={<div>NOT FOUND</div>} /> {/* Page 404 */}
      </Routes>
    </Router>
  );
};

export default App;
