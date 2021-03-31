import React, {useContext, useState} from 'react';
import {GlobalState} from '../../GlobalState';
import Menu from './icon/menu.svg';
import Close from './icon/close.svg';
import Cart from './icon/cart.svg';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Button} from '@material-ui/core';


function Header() {
    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged;
    const [isAdmin] = state.userAPI.isAdmin;
    const [cart] = state.userAPI.cart;
    const [menu, setMenu] = useState(false);

    const logoutUser = async () =>{
        await axios.get('/user/logout');
        
        localStorage.removeItem('firstLogin');
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Button variant="contained" margin="normal"><Link to="/create_product">Create Product</Link></Button></li>
                <li><Button variant="contained" margin="normal"><Link to="/category">Categories</Link></Button></li>
            </>
        );
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><Button variant="contained" margin="normal"><Link to="/history">History</Link></Button></li>
                <li><Button variant="contained" margin="normal"><Link to="/" onClick={logoutUser}>Logout</Link></Button></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <Link to="/">{isAdmin ? 'Admin' : 'A.M Grocery Store'}</Link>
                </h1>
            </div>

            <ul style={styleMenu}>
                <li><Button variant="contained" margin="normal"><Link to="/">{isAdmin ? 'Products' : 'Shop'}</Link></Button></li>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Button variant="contained" margin="normal"><Link to="/login">Login Or Register</Link></Button></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>

            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
            }
            
        </header>
    )
}

export default Header;
