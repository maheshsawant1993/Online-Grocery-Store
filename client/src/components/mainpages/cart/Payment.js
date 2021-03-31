import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import {Redirect} from "react-router";

function Payment(){
    const [click, setClick] = useState(false);
    function handleOnClick(){
        setClick(true);
    }
    if(click===true)
    {
        alert("Your order has been placed successfully");
        return(<Redirect to= '/history' />);
    }
    return(
        <div>
            <ul>
            <li><input type="radio" />
            <label>Cash On Delivery</label></li>

            <li><input type="radio" />
            <label>Credit or Debit Card</label></li>

            <li><input type="radio" />
            <label>Net Banking</label></li>

            <li><input type="radio" />
            <label>UPI</label></li>
            </ul>
            <Button variant="contained" margin="normal" onClick={handleOnClick}>Proceed</Button>
        </div>
    );
}


export default Payment;