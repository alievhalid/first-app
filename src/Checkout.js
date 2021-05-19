import check from "./checkout/check.svg";
import { useState } from "react";

function Checkout(props) {
    // 
    return (
        <div className="checkout">
        <img src={check}/>
        <span className="counter">{props.boug.filter(item => item.bought).length}</span>
    </div>
    )
    
}

export default Checkout;