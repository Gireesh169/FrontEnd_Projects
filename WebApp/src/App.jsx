import { useEffect, useState } from "react";
import Login from "./Login";
import Chat from "./Chat";
import { db } from "./firebase";
import { doc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";

function App() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [username, setUsername] = useState("");

  // Check saved session
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const name = localStorage.getItem("username");
    if (auth === "ok" && name) {
      setIsAuthed(true);
      setUsername(name);
    }
  }, []);

  // Login handler + store presence
  const handleLogin = async (name) => {
    setIsAuthed(true);
    setUsername(name);

    await setDoc(doc(db, "presence", name), {
      online: true,
      lastSeen: serverTimestamp(),
      typing: false
    }, { merge:true });

    localStorage.setItem("auth","ok");
    localStorage.setItem("username", name);
  };

  return isAuthed ? <Chat username={username}/> : <Login onLogin={handleLogin}/>
}

export default App;
