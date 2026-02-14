import React,{useState} from 'react';
const App = () => {
      const [data,setData]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
      });
      const {username,email,password,confirmPassword}=data;
  return (
  
    <div classname="hero">
      <div id="a">
        <h1>Login Form</h1>
      </div>
      <title>Login Form</title>
      <center>
        <form>
          <label>Username:</label>
          <input type="text" name="Username"/><br/>
          <label>Email:</label>
          <input type="text" name="email"/><br/>
          <label>Password:</label>
          <input type="text" name="password"/><br/>
          <label>Confirm Password:</label>
          <input type="text" name ="confirm password"/><br/>
          <button type="submit">Submit</button>

        </form>
        </center>
    </div>
  );
}
export default App;