import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import LiveRoom from "./LiveRoom";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { useState } from "react";
import type { Room } from "./Models";

function App() {
  const [rooms, setRooms] = useState<Room[]>([]);

  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/liveroom">Live Room</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home rooms={rooms} setRooms={setRooms} />} />
        <Route path="/liveroom" element={<LiveRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;