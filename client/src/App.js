import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddContact from "./Pages/AddContact";
import EditContact from "./Pages/EditContact";
import Contacts from "./Pages/Contacts";
import Error from "./Pages/Error";
import NavBare from "./components/NavBare";

function App() {
  return (
    <div className="App">
      <NavBare />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
