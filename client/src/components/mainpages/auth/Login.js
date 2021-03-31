import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Button, TextField} from "@material-ui/core";

function Login() {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value});
    }

    const loginSubmit = async e =>{
        e.preventDefault();
        try {
            await axios.post('/user/login', {...user});

            localStorage.setItem('firstLogin', true);
            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg);
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <h2>Login</h2>
                <TextField variant="outlined" type="email" name="email" required
                placeholder="Email" margin="normal" value={user.email} onChange={onChangeInput} fullWidth />

                <TextField variant="outlined" margin="normal" type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} fullWidth />

                <div className="row">
                    <Button variant="contained" type="submit">Login</Button>
                    <Button variant="contained"><Link to="/register">Register</Link></Button>

                </div>
            </form>
        </div>
    );
}

export default Login;
