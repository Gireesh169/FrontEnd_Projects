import { useEffect, useRef, useState } from "react";
import { db } from "./firebase";
import {
  addDoc, collection, query, orderBy, onSnapshot,
  serverTimestamp, doc, updateDoc, onSnapshot as watchDoc
} from "firebase/firestore";

export default function Chat({ username }) {

  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [friendStatus, setFriendStatus] = useState(null);
  const bottomRef = useRef(null);


  /* 🔥 REAL-TIME MESSAGES + AUTO-SEEN SYSTEM */
  useEffect(() => {
    const q = query(collection(db,"privateChat"),orderBy("createdAt","asc"));

    return onSnapshot(q, async snap=>{
      const docs = snap.docs;
      setMessages(docs.map(m=>({id:m.id,...m.data()})));

      docs.forEach(m=>{
        const d=m.data();
        if(d.user !== username && !d.seen){
          updateDoc(doc(db,"privateChat",m.id),{
            seen:true,
            seenAt:serverTimestamp()
          });
        }
      });

      setTimeout(()=>bottomRef.current?.scrollIntoView({behavior:"smooth"}),100);
    });
  },[]);



  /* 🔹 SEND MESSAGE (✔ delivered, ✔✔ later seen) */
  const send = async(e)=>{
    e.preventDefault();
    if(!msg.trim()) return;

    await addDoc(collection(db,"privateChat"),{
      text:msg.trim(),
      user:username,
      createdAt:serverTimestamp(),
      delivered:true,
      seen:false,
      seenAt:null
    });

    setMsg("");
  };



  /* 🔵 Typing indicator */
  const typing=(e)=>{
    setMsg(e.target.value);
    updateDoc(doc(db,"presence",username),{typing:true});
    setTimeout(()=>updateDoc(doc(db,"presence",username),{typing:false}),900);
  };



  /* 🟢 AUTO-DETECT OTHER USER + LAST SEEN */
  useEffect(()=>{
    return watchDoc(collection(db,"presence"),snap=>{
      snap.docs.forEach(d=>{
        if(d.id !== username) setFriendStatus(d.data()); // automatically identify FRIEND
      });
    });
  },[]);



  /* 🕒 Save LAST SEEN when closing */
  useEffect(()=>{
    const offline=()=>updateDoc(doc(db,"presence",username),{
      online:false,lastSeen:serverTimestamp(),typing:false
    });
    window.addEventListener("beforeunload",offline);
    return offline;
  },[]);



  return(
    <div style={s.screen}>

      {/* 🔥 HEADER WITH ONLINE + LAST SEEN + TYPING + LOGOUT */}
      <header style={s.header}>

        <div>
          <b style={{fontSize:17}}>Chat Room</b><br/>

          <span style={{fontSize:12,opacity:.75}}>

          {/* SHOW STATUS */}
          {friendStatus?.online ?
            `Online 🟢 (Last seen ${friendStatus?.lastSeen?.toDate?.()?.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})})`
            :
            friendStatus?.lastSeen ?
              `Last seen ${friendStatus.lastSeen.toDate().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})}`
              :
              "Offline"
          }

          {/* Typing indicator */}
          {friendStatus?.typing && " • Typing... 🔵"}

          </span>
        </div>

        {/* LOGOUT BUTTON */}
        <button style={s.logout} onClick={()=>{
          localStorage.clear();
          window.location.reload();
        }}>Logout 🚪</button>
      </header>




      {/* 🔥 CHAT BUBBLES */}
      <div style={s.chat}>
        {messages.map((m,i)=>{
          const me = m.user === username;

          return(
            <div key={i} style={{display:"flex",justifyContent:me?"flex-end":"flex-start",padding:4}}>
              
              <div style={{
                ...s.bubble,
                background:me?"#1E88E5":"#2C3746",
                animation:"pop .25s ease"
              }}>
                
                {m.text}

                <div style={s.meta}>

                  {/* Time */}
                  <small>{m.createdAt?.toDate?.()?.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})}</small>

                  {me && (
                    <small style={{marginLeft:6,fontSize:11}}>
                      {m.seen
                        ? `✔✔ Seen at ${m.seenAt?.toDate?.()?.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})}`
                        : `✔ Delivered`
                      }
                    </small>
                  )}
                </div>

              </div>
            </div>
          );
        })}
        <div ref={bottomRef}/>
      </div>




      {/* 🔥 INPUT BAR */}
      <form onSubmit={send} style={s.inputRow}>
        <input value={msg} onChange={typing} placeholder="Type message..." style={s.input}/>
        <button style={s.send}>Send</button>
      </form>

    </div>
  );
}



/* ======================= STYLES ======================= */

const s={
  screen:{height:"100vh",width:"100vw",display:"flex",flexDirection:"column",background:"#0A141A",color:"#fff"},
  header:{padding:"12px 15px",background:"#16232E",borderBottom:"1px solid #1E2E39",
          display:"flex",justifyContent:"space-between",alignItems:"center"},

  logout:{background:"crimson",border:"none",padding:"6px 12px",borderRadius:6,
          color:"#fff",cursor:"pointer",fontWeight:"bold"},

  chat:{flex:1,overflowY:"auto",padding:10},

  bubble:{maxWidth:"70%",padding:"10px 14px",borderRadius:10,fontSize:15,marginBottom:8},
  meta:{display:"flex",justifyContent:"flex-end",gap:6,marginTop:4,fontSize:11,opacity:.9},

  inputRow:{display:"flex",gap:10,padding:10,borderTop:"1px solid #1F2E39",background:"#16232E"},
  input:{flex:1,padding:12,border:"none",borderRadius:8,background:"#0E1823",color:"#fff",outline:"none"},
  send:{padding:"10px 16px",background:"#1E88E5",border:"none",borderRadius:8,color:"#fff",fontWeight:600}
};

const style=document.createElement("style");
style.innerHTML=`@keyframes pop{0%{transform:scale(.7);opacity:.3}100%{opacity:1}}`;
document.head.appendChild(style);
