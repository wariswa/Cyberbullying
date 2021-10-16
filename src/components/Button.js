import React from 'react';
import { useState } from 'react'; 

export function Submitbutton(props) {
    const [value, setValue] = React.useState(null);

    const handleSubmit = (event, text) => {
        props.allowClick.current = true
        console.log(event.target.innerText)
        if(event.target.innerText.length > 0){
            setValue(event.target.innerText)
        }
        if(text === "firstbutton"){
            props.loading.current = true;
            props.handleFade(false);
            setTimeout(()=>{
                props.handleCount(17) //TODO: change 0 with proper destination screen count
                props.handleFade(true);
            }, 1000)
            setTimeout(function () {
                props.loading.current = false;
            }, 2000)
        }  
        else if(text === "secondbutton"){
            props.loading.current = true;
            props.handleFade(false);
            setTimeout(()=>{
                props.handleCount(17) //TODO: change 0 with proper destination screen count
                props.handleFade(true);
            }, 1000)
            setTimeout(function () {
                props.loading.current = false;
            }, 2000)
        }
        else if(text === "thirdbutton"){
            props.loading.current = true;
            props.handleFade(false);
            setTimeout(()=>{
                props.handleCount(19) //TODO: change 0 with proper destination screen count
                props.handleFade(true);
            }, 1000)
            setTimeout(function () {
                props.loading.current = false;
            }, 2000)
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
        console.log("NameForm: useEffect");
        props.allowClick.current = false
        return () => {props.allowClick.current = true};
    }, [])

    return (
        <div className="submit-container" >
    
        <h2 style={{fontWeight:500 ,fontSize:"19px", paddingLeft:"20px", marginBottom:"0"}}>เธอเคยพิมพ์คำพวกนี้ใส่ใครไหม?</h2>
        
    
        <input type="submit" id="firstbutton" name="selector" value="เคย" 
         className="button nonskip" onClick={(e)=>handleSubmit(e,"firstbutton")}/>
        
    
        <input type="submit" id="secondbutton" name="selector" value="ไม่แน่ใจ" 
        className="button nonskip" style={{marginTop:"20px"}} onClick={(e)=>handleSubmit(e,"secondbutton")}/>

        <input type="submit" id="thirdbutton" name="selector" value="ไม่เคย" 
        className="button nonskip" style={{marginTop:"20px"}} onClick={(e)=>handleSubmit(e,"thirdbutton")}/>
        
     
    
    </div>
);
}
