
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PlayerDashboard from "./pages/PlayerDashboard";
import FindVenue from "./pages/FindVenue";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/player-dashboard" element={<PlayerDashboard />}/>
        <Route path="/find-venue" element={<FindVenue />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
