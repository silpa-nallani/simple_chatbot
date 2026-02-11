import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Spatial from "./pages/Spatial";
import Catalogue from "./pages/Catalogue";
import Simulation from "./pages/Simulation";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/spatial" element={<Spatial />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/simulation" element={<Simulation />} />
      </Routes>
    </Router>
  );
}
