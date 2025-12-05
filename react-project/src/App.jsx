
import { useState } from 'react'
import Header from './Components/Header.jsx'
import Food from './Components/Food.jsx'
import Footer from './Components/Footer.jsx';
import Card from './Cards/Card.jsx';
import Button from './Button/Button.jsx';
import Student from './props/Student.jsx';
import UserGreeting from './Conditional_Rendering/UserGreeting.jsx';
import List from './render_list/List.jsx';
import ProfilePicture from './Profile/ProfilePicture.jsx';
import MyComponent from './Component/MyComponent.jsx';
import Counter from './Component/Counter.jsx';
import OnChange from './Component/OnChangeHook.jsx';

function App() {
  return (
    <>
      <Header />
      <Food />
      <Card />
      <Footer />

      <Student name="John Doe" age={20} grade="A" isStudent={true} />
      <Student name="Jane Smith" age={22} grade="B" isStudent={false} />
      <Student name="larry" />
      
      <UserGreeting isLoggedIn={true} username="gireesh"/>

      <List />

      <Button /> 
      <center>
      <ProfilePicture />  
      </center>

      <MyComponent /> 
      <Counter />
      <OnChange />
    </>
  );
}

export default App;
