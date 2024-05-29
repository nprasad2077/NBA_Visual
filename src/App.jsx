import { useState, useEffect } from "react";
import ReactVirtualizedTable from "./components/ReactVirtualizedTable.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <>
      <div class='flex flex-col items-center'>
        <header class="text-center mb-10">
          <h1 class="text-6xl font-semibold">NBA Data</h1>
        </header>
      </div>
      <div class="flex flex-col items-center w-full" data-theme='black'>
        <BrowserRouter>
          <Navigation />
          <div class='flex flex-col items-center justify-center w-full mt-4'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reactvtable" element={<ReactVirtualizedTable />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
