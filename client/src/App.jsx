import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import DataTerrorPage from "./pages/DataTerrorPage";
import TestTerrorPage from "./pages/TestTerrorPage";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataTerrorPage/>}/>
        <Route path="/test" element={<TestTerrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
