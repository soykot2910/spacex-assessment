import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="*" element={<h2>No Page Found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
