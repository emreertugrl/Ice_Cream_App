import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import List from "./components/list";
import Home from "./pages/home/index";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen bg-red-700 text-white py-[30px] 2xl:py-[50px] px-[5%]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<Hero />} /> */}
          {/* <Route path="*" element={<List />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
