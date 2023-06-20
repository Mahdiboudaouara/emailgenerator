import "./App.css";
import React from "react";
import AppBar from "./components/AppBar";
import MailForm from "./components/MailForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<MailForm />} />
      </Routes>
    </>
  );
}

export default App;
