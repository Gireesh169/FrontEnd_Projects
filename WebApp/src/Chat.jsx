import { useEffect, useRef, useState } from "react";
import { db } from "./firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

export default function Chat({ username, onLogout }) {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "privateChat"), orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snap) => {
      setMessages(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    });
    return unsub;
  }, []);

  const send = async (e) => {
    e.preventDefault();

    const trimmed = msg.trim();
    if (!trimmed) return;

    setMsg(""); // clear immediately to avoid double send

    await addDoc(collection(db, "privateChat"), {
      text: trimmed,
      user: username,
      createdAt: serverTimestamp(),
    });
  };

  return (
    <div style={styles.screen}>

      {/* HEADER */}
      <header style={styles.header}>
        <div style={{fontWeight:700, fontSize:"18px"}}>💙 Chat</div>
        <div style={{fontSize:"13px", opacity:0.7}}>Logged in as: {username}</div>

        <button onClick={onLogout} style={styles.logout}>
          Logout
        </button>
      </header>

      {/* CHAT BOX */}
      <div style={styles.chatBox}>
        {messages.map((m) => {
          const mine = m.user === username;
          return (
            <div key={m.id} style={{
              display:"flex",
              justifyContent: mine ? "flex-end" : "flex-start",
              padding:"4px"
            }}>
              <div style={{
                ...styles.bubble,
                background: mine ? "#1976D2" : "#263240",
                borderBottomRightRadius: mine ? "6px" : "16px",
                borderBottomLeftRadius: mine ? "16px" : "6px",
              }}>
                {m.text}
              </div>
            </div>
          );
        })}
        <div ref={bottomRef}></div>
      </div>

      {/* INPUT BAR */}
      <form onSubmit={send} style={styles.inputWrap}>
        <input
          placeholder="Type a message..."
          value={msg}
          onChange={(e)=>setMsg(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.sendBtn}>Send</button>
      </form>
    </div>
  );
}

/* ========= FULL SCREEN STYLE ========= */
const styles = {
  screen:{
    height:"100vh",
    width:"100vw",
    display:"flex",
    flexDirection:"column",
    background:"#0E1621",
    color:"white",
    overflow:"hidden"
  },

  header:{
    padding:"15px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    background:"#17212B",
    borderBottom:"1px solid #1E2A39"
  },

  logout:{
    background:"crimson",
    border:"none",
    color:"#fff",
    padding:"6px 12px",
    borderRadius:"6px"
  },

  chatBox:{
    flex:1,
    overflowY:"auto",
    padding:"14px"
  },

  bubble:{
    padding:"10px 14px",
    maxWidth:"70%",
    color:"white",
    borderRadius:"14px",
    fontSize:"14px",
    lineHeight:"1.35"
  },

  inputWrap:{
    display:"flex",
    gap:"8px",
    padding:"10px",
    background:"#17212B",
    borderTop:"1px solid #1E2A39"
  },

  input:{
    flex:1,
    padding:"12px",
    borderRadius:"8px",
    border:"none",
    background:"#0E1621",
    color:"white",
    outline:"none"
  },

  sendBtn:{
    background:"#1976D2",
    border:"none",
    padding:"10px 16px",
    borderRadius:"8px",
    color:"white",
    fontWeight:600
  }
};
