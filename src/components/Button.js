import React from 'react';
import { useState } from 'react'; 

export function Submitbutton(props) {
    const [value, setValue] = React.useState(null);

    const handleSubmit = (event, text) => {
        console.log(event.target.innerText)
        if(event.target.innerText.length > 0){
            setValue(event.target.innerText)
        
        }
        if(text === "firstbutton"){
            props.handleCount(0) //TODO: change 0 with proper destination screen count
        }  
        else if(text === "secondbutton"){
            props.handleCount(0) //TODO: change 0 with proper destination screen count
        }
        else if(text === "thirdbutton"){
            props.handleCount(0) //TODO: change 0 with proper destination screen count
        }

    };
    // const handleRadioSubmit = (e) => {
    //     e.preventDefault();
    //     if(!value || value.length === 0){
    //         alert("Please select an option")
    //         return;
    //     }
    //     localStorage.setItem('radio1', value);
    //     const elem = document.getElementById('canvas2');
    //     elem.click()
    // }

    React.useEffect(() => {
        console.log("Submitbutton: useEffect");
        const backup = document.getElementById("canvas2").style;
        document.getElementById("canvas2").style.pointerEvents = "none";

        return () => {document.getElementById("canvas2").style = backup};
    }, [])

    return (
        <div className="submit-container" >
    
        <h2>เธอเคยพิมพ์คำพวกนี้ใส่ใครไหม?</h2>
        
    
        <input type="submit" id="firstbutton" name="selector" value="เคย" 
         className="button" onClick={(e)=>handleSubmit(e,"firstbutton")}/>
        
    
        <input type="submit" id="secondbutton" name="selector" value="ไม่แน่ใจ" 
        className="button" onClick={(e)=>handleSubmit(e,"secondbutton")}/>
        
     
        <input type="submit" id="thirdbutton" name="selector" value="ไม่เคย" 
        className="button" onClick={(e)=>handleSubmit(e,"thirdbutton")}/>
        
     
    
    </div>
);
}
