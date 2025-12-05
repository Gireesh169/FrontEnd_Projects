// src/App.jsx
import { useEffect, useState } from "react";
import Login from "./Login.jsx";
import Chat from "./Chat.jsx";

function App() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [username, setUsername] = useState("");

  // Check localStorage on first load
  useEffect(() => {
    const savedAuth = localStorage.getItem("auth");
    const savedName = localStorage.getItem("username");
    if (savedAuth === "ok" && savedName) {
      setIsAuthed(true);
      setUsername(savedName);
    }
  }, []);

  const handleLogin = (name) => {
    setIsAuthed(true);
    setUsername(name);
    localStorage.setItem("auth", "ok");
    localStorage.setItem("username", name);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    setIsAuthed(false);
    setUsername("");
  };

  return (
    <>
      {isAuthed ? (
        <Chat username={username} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
