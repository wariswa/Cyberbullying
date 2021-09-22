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
        e.preventDefault();
        if(!value || value.length === 0){
            alert("Please select an option")
            return;
        }
        localStorage.setItem('radio1', value);
        const elem = document.querySelector('canvas');
        elem.click()
    }

    React.useEffect(() => {
        console.log("Radioform: useEffect");
        const backup = document.querySelector("canvas").style;
        document.querySelector("canvas").style.pointerEvents = "none";

        return () => {document.querySelector("canvas").style = backup};
    }, [])


    return (
            <div className="radio-container">
        
            <h2>วันนี้เธอเป็นอย่างไรบ้าง?</h2>
            
        <ul>
        <li onClick={handleChange}>
            <input type="radio" id="a-option" name="selector" />
            <label htmlFor="a-option">มีความสุขมาก</label>
            
            <div className="check"></div>
        </li>
        
        <li onClick={handleChange}>
            <input type="radio" id="b-option" name="selector" />
            <label htmlFor="b-option">ก็ไม่ได้แย่นะ ค่อนข้างดี</label>
            
            <div className="check"><div className="inside"></div></div>
        </li>
        
        <li onClick={handleChange}>
            <input type="radio" id="c-option" name="selector" />
            <label htmlFor="c-option">เฉยๆ เหมือนทุกๆวัน</label>
            
            <div className="check"><div className="inside"></div></div>
        </li>

        <li onClick={handleChange}>
            <input type="radio" id="d-option" name="selector" />
            <label htmlFor="d-option">ไม่ค่อยดีเลย</label>
            
            <div className="check"><div className="inside"></div></div>
        </li>

        <li onClick={handleChange}>
            <input type="radio" id="e-option" name="selector" />
            <label htmlFor="e-option">เป็นวันที่ไม่มีความสุขมากวันนึง</label>
            
            <div className="check"><div className="inside"></div></div>
        </li>
        <li onClick={handleRadioSubmit}>
            <input className="radiobutton" type="submit" value="ยืนยัน" onClick={()=>{}} 
                style={{marginTop: "30px"}}
            />
        </li>
        </ul>
        </div>
    );
  }