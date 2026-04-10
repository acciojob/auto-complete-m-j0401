

import React, {useState} from "react";

import fruit from "../Fruits/Fruitlist.js"

const Input=()=>{
    
    let[phal,setPhal]=useState(fruit)
    function handleInput(e){
       let v=e.target.value;
       let t=fruit.filter((f)=>
             f.includes(v));
       setPhal(t)

    }

    return(
        <div>
            <h1>Search Items</h1>
            <input type="text"
                   onChange={handleInput}
                   ></input>
                   <ul>
             {
                phal.map((p,i)=>
                <li key={i}>{p}</li>)
             }       
                   </ul>
            </div>
    )
}

export default Input;