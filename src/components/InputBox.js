import React from 'react';
import { useState } from 'react';

export function InputBox(props) {
    const [text, setText] = useState("");
    React.useEffect(() => {
      console.log("nameform: useEffect");
      
      props.allowClick.current = false
      return () => {props.allowClick.current = true};
    }, [])

    const handleChange = (e) => {
      setText(e.target.value)
      localStorage.setItem("message"+props.messagenumber, e.target.value);
    }
    
    const handleSubmit = (e) => {
      props.allowClick.current = true
      e.preventDefault();
      if(text.length < 1){
        alert("กรุณากรอกข้อความ");
        return;
      }
      setText("");
      console.log(`Submitting Message ${text}`)
      localStorage.setItem("message"+props.messagenumber, text);
      document.body.click()
    }

 
        return (
        <div className="textArea">
        <form onSubmit={handleSubmit} id="messageform" className="nonskip">
        <label className="inputbox-container"> {props.heading}  </label>
          {/* //!TODO:  change hello world with proper text and give some padding and css */}
          {/* //!TODO:  also change css for button and position it correctly... */}
          
          <textarea id="message" onChange={handleChange} value={text}
            style={{fontSize: "17px", color: "white", margin: "10px"}}
          ></textarea>
          
        <input className="textarea-submit-button" type="submit" value="ยืนยัน" onClick={handleSubmit} />
          
        </form>
        </div>
      );
}
      