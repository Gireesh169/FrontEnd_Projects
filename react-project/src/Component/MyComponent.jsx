import React, {useState} from 'react';




function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isStudent, setIsStudent] = useState(false);
    const updateName = () => {
        setName("gireesh");
    }
    const incrementAge = () => {
        setAge(age + 1);
    }
    const StudentStatus = () => {
        setIsStudent(!isStudent);
    }
    return (
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Update Name</button>
            <p>Age : {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p>Is Student : {isStudent ? "Yes" : "No"}</p>
            <button onClick={StudentStatus}>Toggle Student Status</button>
            <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
        </div>
    );
    
}

export default MyComponent;