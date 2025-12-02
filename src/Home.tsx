import { Link, useNavigate } from "react-router-dom";
import "./assets/css/Home.css";
import type { Room } from "./Models";
// import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface HomeProps {
    rooms: Room[];
    setRooms: Dispatch<SetStateAction<Room[]>>;
  }

export default function Home({ rooms, setRooms }: HomeProps) {
    const navigate = useNavigate();

    const CreateARoom = () => {
        const newRoom: Room ={
            apiKey: "mmhfdzb5evj2",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL1RocmlsbGluZ19JbnRlbGxpZ2VuY2UiLCJ1c2VyX2lkIjoiVGhyaWxsaW5nX0ludGVsbGlnZW5jZSIsInZhbGlkaXR5X2luX3NlY29uZHMiOjYwNDgwMCwiaWF0IjoxNzY0NzA1MDAyLCJleHAiOjE3NjUzMDk4MDJ9.gsagROWVs1mg-4Zun_D54iVmtU-mmpowimNeWiNQdpM",
            userId: "Thrilling_Intelligence",
            callId: "rICCgd8eRV0kw6Pjw0SWS",
            roomName: "Test Room 1",
        }
        setRooms([...rooms, newRoom]);
        navigate("/liveroom");
      };

      
    return (
        <div className="container">
            <h1>Home Page</h1>
            <div className="toolbar">
            <button id="createBtn" className="btn" onClick={CreateARoom}>Create</button>
            <span className="hint">Click “Create” to create a new live room.</span>
            </div>

            <div id="list" className="list">
            <ul>
                {rooms.map((room, index) => (
                <li key={index}>
                    <Link to="/liveroom">{room.roomName}</Link>
                </li>
                ))}
            </ul>

            <div className="item">
                <span className="icon">🔗</span>
                <div>
                <a className="link" href="https://example.com" target="_blank" rel="noopener">Example</a>
                <div className="subtitle">https://example.com</div>
                </div>
            </div>
            <div className="item">
                <span className="icon">🔗</span>
                <div>
                <a className="link" href="https://github.com" target="_blank" rel="noopener">GitHub</a>
                <div className="subtitle">https://github.com</div>
                </div>
            </div>
            <div className="item">
                <span className="icon">🔗</span>
                <div>
                <a className="link" href="https://vitejs.dev" target="_blank" rel="noopener">Vite</a>
                <div className="subtitle">https://vitejs.dev</div>
                </div>
            </div>
            </div>
        </div>
    );
  }