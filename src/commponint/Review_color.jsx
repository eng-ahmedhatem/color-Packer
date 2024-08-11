import style from "../button/style.module.css"
import "../button/style.module.css"
import { useState } from "react"
function Div_color (params) {
    const [color,setColor]= useState("#0c0909") 
    function handelColor (event){
        setColor(event.target.value)
    }
    function copyColor() {
        navigator.clipboard.writeText(color)
        alert("copy done")
    }
    return (
        <>
        <h1 style={{fontSize:"25px",textTransform:"capitalize"}}>color picker</h1>
        <div className={style.div_color} style={{backgroundColor:color}}>
            <h2 style={{fontSize:"20px",textTransform:"capitalize"}}>{params.text} 
                <br/>
                {color}
            </h2>
        </div> 
            <label for="inp_color" style={{fontSize:"20px",textTransform:"capitalize"}}>select the color :</label>
            <input id="inp_color" type="color" value={color} onChange={handelColor} style={{width:"100px",height:"40px",borderRadius:"20px",overflow:"hidden"}} />
            <button onClick={copyColor} style={{fontSize:"16px",textTransform:"capitalize"}}>copy color</button>
        </>
    )
    
}
export default Div_color