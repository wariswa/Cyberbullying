import React from 'react';
import { useState } from 'react';

export function InputBox(props) {
    const [text, setText] = useState("");
    React.useEffect(() => {
        console.log("InputBox: useEffect");
        const backup = document.getElementById("canvas2").style;
        document.getElementById("canvas2").style.pointerEvents = "none";

        return () => {document.getElementById("canvas2").style = backup};
    }, [])

    const handleChange = (e) => {
      setText(e.target.value)
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if(text.length < 1){
        alert("กรุณากรอกข้อความ");
        return;
      }
      console.log(`Submitting Message ${text}`)
      localStorage.setItem('message1', text);
      const elem = document.getElementById('canvas2');
      elem.click()
    }

 
        return (
        <form onSubmit={handleSubmit}>
        <label className="inputbox-container"> Hello World  
          {/* //!TODO:  change hello world with proper text and give some padding and css */}
          {/* //!TODO:  also change css for button and position it correctly... */}
          
          <textarea id="message" onChange={handleChange} value={text}
            style={{fontSize: "17px", color: "white"}}
          ></textarea>
          <input className="submit-button" type="submit" value="ยืนยัน" onClick={handleSubmit}
          />
          </label>
        </form>
      );
}
      