import React, { useState } from 'react'
import axios from 'axios';
 
const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
   
 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/login', {
                login: login,
                password: password
            });
        } catch (error) {
           console.log(error)
        }
    }
 
    return (
        <form onSubmit={Login}>
            <label htmlFor="login"><b>Email</b></label><br />
            <input type="text" placeholder="Enter login" name="login" id="login" required /><br />
            <label htmlFor="password"><b>Password</b></label><br />
            <input type="password" placeholder="Enter Password" name="password" id="psw" required></input><br />
            <button>Login</button>
        </form>
    )
}
 
export default Login