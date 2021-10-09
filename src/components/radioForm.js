import React from 'react';


export function RadioForm(props) {

    const [value, setValue] = React.useState(null);

    const handleChange = (event) => {
        console.log(event.target.innerText)
        if(event.target.innerText.length > 0){
            setValue(event.target.innerText)
        }
    };
    const handleRadioSubmit = (e) => {
        props.allowClick.current = true
        e.preventDefault();
        if(!value || value.length === 0){
            alert("Please select an option")
            return;
        }
        localStorage.setItem('radio1', value);
        document.body.click()
    }

    React.useEffect(() => {
        console.log("Radioform: useEffect");
        setValue(null)
        localStorage.removeItem('radio1')
        props.allowClick.current = false
        return () => {props.allowClick.current = true};
    }, [])


    return (
            <div className="radio-container nonskip">
        
            <p>วันนี้เธอเป็นอย่างไรบ้าง?</p>
            

        <input type="submit" id="firstbutton" name="selector" value="มีความสุขมาก" 
         className="feelingButton" />
        
        <input type="submit" id="firstbutton" name="selector" value="ก็ไม่ได้แย่นะ ค่อนข้างดี" 
         className="feelingButton" />
        
        <input type="submit" id="firstbutton" name="selector" value="เฉยๆ เหมือนทุกๆวัน" 
         className="feelingButton" />
        
        <input type="submit" id="firstbutton" name="selector" value="ไม่ค่อยดีเลย" 
         className="feelingButton" />

        <input type="submit" id="firstbutton" name="selector" value="เป็นวันที่ไม่มีความสุขมากวันนึง" 
         className="feelingButton" />

        </div>
    );
  }