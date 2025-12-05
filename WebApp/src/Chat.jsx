// src/Chat.jsx (FULL RESPONSIVE VERSION)
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
  const [showSidebar, setShowSidebar] = useState(false);
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
  e.preventDefault(); // stop double triggering

  const trimmed = msg.trim();
  if (!trimmed) return;  // prevents resending empty or last message

  setMsg(""); // clear input immediately to stop repeat click

  await addDoc(collection(db, "privateChat"), {
    text: trimmed,
    user: username,
    createdAt: serverTimestamp(),
  });
};


  return (
    <div style={styles.container}>

      {/* ============= LEFT SIDEBAR ============= */}
      <aside 
        style={{
          ...styles.sidebar,
          display: window.innerWidth < 900 ? (showSidebar ? "flex" : "none") : "flex",
        }}
      >
        <header style={styles.sidebarHeader}>
          <h3>Chats</h3>
          <button style={styles.logout} onClick={onLogout}>Logout</button>
        </header>

        <input type="text" placeholder="Search" style={styles.search}/>

        <div style={styles.chatUser}>
          <div style={styles.avatar}>{username[0]}</div>
          <div>
            <strong>{username}</strong>
            <p style={{fontSize:"12px",opacity:.7}}>Private chat</p>
          </div>
        </div>
      </aside>



      {/* ============= MAIN CHAT PANEL ============= */}
      <main style={styles.chatArea}>
        
        {/* TOP BAR MOBILE */}
        {window.innerWidth < 900 && (
          <div style={styles.mobileHeader}>
            <button style={styles.menuBtn} onClick={() => setShowSidebar(!showSidebar)}>☰</button>
            <strong>Chat</strong>
          </div>
        )}

        {/* CHAT HEADER DESKTOP */}
        {window.innerWidth >= 900 && (
          <div style={styles.chatHeader}>
            <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
              <div style={styles.bigAvatar}>{username[0]}</div>
              <div>
                <strong>{username}</strong>
                <p style={{fontSize:"12px",opacity:.6}}>online</p>
              </div>
            </div>
          </div>
        )}

        {/* MESSAGES */}
        <div style={styles.messages}>
          {messages.map((m) => {
            const mine = m.user === username;
            return (
              <div key={m.id} style={{display:"flex",justifyContent:mine?"flex-end":"flex-start"}}>
                <div style={{
                  ...styles.bubble,
                  background: mine ? "#3f8be6" : "#1f232a",
                  borderBottomRightRadius: mine? "4px":"12px",
                  borderBottomLeftRadius: mine? "12px":"4px",
                }}>
                  {m.text}
                </div>
              </div>
            );
          })}
          <div ref={bottomRef}/>
        </div>

        {/* INPUT BAR */}
        <form onSubmit={send} style={styles.inputArea}>
          <input
            placeholder="Write a message..."
            value={msg}
            onChange={(e)=>setMsg(e.target.value)}
            style={styles.input}
          />
          <button style={styles.sendBtn}>Send</button>
        </form>
      </main>



      {/* ============= RIGHT INFO PANEL (HIDES ON MOBILE) ============= */}
      <aside style={{
        ...styles.profile,
        display: window.innerWidth < 1100 ? "none" : "flex"
      }}>
        <div style={{textAlign:"center",marginTop:"40px"}}>
          <div style={styles.bigAvatar}>{username[0]}</div>
          <h3>{username}</h3>
          <p style={{opacity:.7}}>Private chat room</p>
        </div>
      </aside>
      

    </div>
  );
}


/* ========== CSS STYLE ========= */
const styles = {
  container:{
    display:"flex",
    height:"100vh",
    background:"#17212b",
    color:"#fff"
  },

  sidebar:{
    width:"25%",
    background:"#0e1621",
    flexDirection:"column",
    borderRight:"1px solid #222b36"
  },
  sidebarHeader:{
    padding:"15px",
    borderBottom:"1px solid #222b36",
    display:"flex",
    justifyContent:"space-between"
  },
  search:{
    margin:"12px",
    padding:"10px",
    borderRadius:"8px",
    background:"#17212b",
    border:"none",
    color:"#cbd6e2"
  },
  logout:{background:"crimson",border:"none",padding:"5px 10px",borderRadius:"6px",color:"#fff"},
  chatUser:{display:"flex",alignItems:"center",gap:"10px",padding:"12px"},

  avatar:{width:40,height:40,background:"#3e5879",borderRadius:"50%",display:"grid",placeItems:"center"},
  bigAvatar:{width:50,height:50,background:"#3e5879",borderRadius:"50%",display:"grid",placeItems:"center",fontSize:20},


  /* CENTER CHAT */
  chatArea:{flex:1,display:"flex",flexDirection:"column"},
  chatHeader:{padding:"15px",borderBottom:"1px solid #222b36"},
  messages:{flex:1,padding:"15px",overflowY:"auto"},
  bubble:{padding:"10px 14px",borderRadius:"12px",marginBottom:"8px",maxWidth:"60%"},

  inputArea:{display:"flex",gap:"8px",padding:"12px",borderTop:"1px solid #222b36",background:"#17212b"},
  input:{flex:1,padding:"10px",borderRadius:"8px",background:"#0e1621",border:"none",color:"#cfd8e3"},
  sendBtn:{padding:"10px 14px",background:"#3f8be6",border:"none",borderRadius:"8px",color:"#fff",fontWeight:600},


  /* MOBILE TOP HEADER */
  mobileHeader:{background:"#0e1621",padding:"14px",display:"flex",gap:"10px",alignItems:"center"},
  menuBtn:{background:"transparent",color:"#fff",fontSize:"22px",border:"none"},


  /* RIGHT PANEL (Hidden in mobile) */
  profile:{width:"25%",background:"#0e1621",borderLeft:"1px solid #222b36",justifyContent:"center"}
};
