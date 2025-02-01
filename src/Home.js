import React from "react";
import { Routes, Route } from "react-router-dom";
import Description from "./components/Description";
import App from "./App";

function Home() {
  return (
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/movie/:id" element={<Description />} />
    </Routes>
  );
}

export default Home;