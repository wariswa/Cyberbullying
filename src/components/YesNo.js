import React  from "react";
import { useEffect } from "react";

const YesNo = (props) => {
    const [value, setValue] = React.useState(null);
    React.useEffect(() => {
        console.log("YesNo: useEffect");
        props.allowClick.current = false
        return () => {props.allowClick.current = true};
    }, [])
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
                props.handleCount(props.yes) //TODO: change 0 with proper destination screen count
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
                props.handleCount(props.no) //TODO: change 0 with proper destination screen count
                props.handleFade(true);
            }, 1000)
            setTimeout(function () {
                props.loading.current = false;
            }, 2000)
        }

    };

    return <div className="submit-container" >
    
    <h2 style={{fontWeight:500 ,fontSize:"19px", paddingLeft:"20px", marginBottom:"0"}}>{props.text}</h2>
    

    <input type="submit" id="firstbutton" name="selector" value={props.customyes? props.customyes : "เคย"}
    style={{width: "25%", transform: "translate(158%, 50%)"}}
     className="button nonskip" onClick={(e)=>handleSubmit(e,"firstbutton")}/>
    
    <input type="submit" id="thirdbutton" name="selector" value={props.customno ? props.customno : "ไม่เคย"} 
    className="button nonskip" style={{marginTop:"20px", width: "25%", transform: "translate(158%, 50%)"}} onClick={(e)=>handleSubmit(e,"thirdbutton")}/>
    
 

</div>
}

export default YesNo;