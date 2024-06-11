import * as React from "react";
import Home from "./home";
import Header from "./header";
import Footer from "./footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./services";

const App=()=>{
  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/#services" element={<Services />} /> */}
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<Home />} />
      </Routes> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
