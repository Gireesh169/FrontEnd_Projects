import { useState } from "react";

const SECRET_KEY = "divi@1619"; // Change + share only with friend 🔐

export default function Login({ onLogin }) {
  const [name,setName]=useState("");
  const [key,setKey]=useState("");

  const login = (e)=>{
    e.preventDefault();
    if(key !== SECRET_KEY) return alert("Wrong Secret Key ❌");
    if(!name.trim()) return;

    onLogin(name);
  };

  return (
    <div style={styles.page}>
      <form onSubmit={login} style={styles.box}>
        
        <h2 style={{textAlign:"center"}}>💙 Private Chat Login</h2>

        <label>Name</label>
        <input value={name} onChange={e=>setName(e.target.value)} style={styles.input}/>

        <label>Secret Key</label>
        <input type="password" value={key} onChange={e=>setKey(e.target.value)} style={styles.input}/>

        <button style={styles.btn}>Enter Chat 💬</button>
      </form>
    </div>
  );
}

const styles={
  page:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"#0E1621"},
  box:{background:"#1A2332",padding:25,borderRadius:15,width:"85%",maxWidth:340,color:"#fff"},
  input:{width:"100%",padding:10,margin:"10px 0",borderRadius:8,border:"none",background:"#0E1621",color:"#fff"},
  btn:{width:"100%",padding:10,border:"none",borderRadius:8,background:"#1976D2",color:"#fff",fontSize:16}
};
