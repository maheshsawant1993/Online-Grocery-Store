import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Button, TextField} from "@material-ui/core";

function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password: ''
    });

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value});
    };

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user});
            localStorage.setItem('firstLogin', true);
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg);
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>Register</h2>
                <TextField variant="outlined" margin="normal" fullWidth type="text" name="name" required
                placeholder="Name" value={user.name} onChange={onChangeInput} />

                <TextField variant="outlined" margin="normal" fullWidth type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <TextField variant="outlined" margin="normal" fullWidth type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <Button variant="contained" type="submit">Register</Button>
                    <Button variant="contained"><Link to="/login">Login</Link></Button>

                </div>
            </form>
        </div>
    );
}

export default Register;