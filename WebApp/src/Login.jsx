// src/Login.jsx
import { useState } from "react";

const SECRET_KEY = "divi@1619"; // 🔐 change this & share only with your friend

export default function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== SECRET_KEY) {
      alert("❌ Wrong secret key");
      return;
    }

    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    onLogin(name.trim());
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#1e293b",
          padding: "24px",
          borderRadius: "12px",
          width: "90%",
          maxWidth: "360px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
          🔐 Chat
        </h2>

        <label>Username</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 16px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <label>Secret Key</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Shared secret key"
          style={{
            width: "100%",
            padding: "10px",
            margin: "8px 0 16px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            background: "#3b82f6",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "8px",
          }}
        >
          Enter Chat 💬
        </button>
      </form>
    </div>
  );
}
