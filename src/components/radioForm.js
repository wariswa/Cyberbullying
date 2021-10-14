import React from 'react';


export function RadioForm(props) {

    
    const handleRadioSubmit = (e) => {
        props.allowClick.current = true
        e.preventDefault();
        console.log(e.target.value)
        if(!e.target.value || e.target.value === 0){
            alert("Please select an option")
            return;
        }
        localStorage.setItem('radio1', e.target.value);
        document.body.click()
    }

    React.useEffect(() => {
        console.log("Radioform: useEffect");
        localStorage.removeItem('radio1')
        props.allowClick.current = false
        return () => {props.allowClick.current = true};
    }, [])


    return (
            <div className="radio-container nonskip">
        
            <p>วันนี้เธอเป็นอย่างไรบ้าง?</p>
            

        <input type="submit" id="firstbutton" name="selector" value="มีความสุขมาก" 
         className="feelingButton" onClick={handleRadioSubmit} />
        
        <input type="submit" id="firstbutton" name="selector" value="ก็ไม่ได้แย่นะ ค่อนข้างดี" 
         className="feelingButton" onClick={handleRadioSubmit}  />
        
        <input type="submit" id="firstbutton" name="selector" value="เฉยๆ เหมือนทุกๆวัน" 
         className="feelingButton" onClick={handleRadioSubmit} />
        
        <input type="submit" id="firstbutton" name="selector" value="ไม่ค่อยดีเลย" 
         className="feelingButton" onClick={handleRadioSubmit} />

        <input type="submit" id="firstbutton" name="selector" value="เป็นวันที่ไม่มีความสุขมากวันนึง" 
         className="feelingButton" onClick={handleRadioSubmit}/>

        </div>
    );
  }