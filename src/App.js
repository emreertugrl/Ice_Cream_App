import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import List from "./components/list";
import Home from "./pages/home/index";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<Hero />} /> */}
        {/* <Route path="*" element={<List />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
