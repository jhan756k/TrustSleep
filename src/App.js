import React from "react";
import Mainpage from "./Pages/Mainpage";
import Setting from "./Pages/Setting";
import Alarm from "./Pages/Alarm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/alarm" element={<Setting />} />
        <Route path="/setting" element={<Alarm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
