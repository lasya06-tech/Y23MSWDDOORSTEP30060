import React, { useState } from 'react';
const Register = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage]=useState('');
    const handleSubmit=async(e)=> {
        e.preventDefault();
        //'http://127.0.0.1:5000/register' is the URL where your backend server is listening for the registration request.
        //method: 'POST': This specifies that you’re sending data to the server (a POST request).
        //headers: This tells the server that you're sending JSON data in the request body
        const response=await fetch('http://localhost:3000/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({username,password})
        });
         //The data being sent to the server. You convert the username and password to a JSON string using JSON.stringify().
        const result =await response.json();
        setMessage(result.message || result.error);
        //setMessage(result.message || result.error): The result object will contain either a success message or an error message
    }
  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            required
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            />
            <br />
            <button type="submit">Register</button>
        </form>
        <p>{message}</p>
    </div>
  )
}

export default Register
