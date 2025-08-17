import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import ProfilePage from "./Home/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfilePage />}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
