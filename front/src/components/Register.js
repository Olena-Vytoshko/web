import React, { useState } from 'react'
import axios from "axios";


const Register = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/register', {
                login: login,
                password: password,
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={Register}>
            <label htmlFor="email"><b>Email</b></label><br />
            <input type="text" placeholder="Enter Email" name="email" id="email" required /><br />
            <label htmlFor="password"><b>Password</b></label><br />
            <input type="password" placeholder="Enter Password" name="password" id="psw" required></input><br />
            <button>Register</button>
        </form>
    )
}

export default Register