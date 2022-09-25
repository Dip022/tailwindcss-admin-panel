import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import BasixAdmin from "./component/BasixAdmin/BasixAdmin";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BasixAdmin></BasixAdmin>}>
          <Route path="/" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
