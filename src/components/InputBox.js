import React from 'react';
import { useState } from 'react';

export function InputBox(props) {
    const [text, setText] = useState("");
    React.useEffect(() => {
      console.log("nameform: useEffect");
      const usermessage = localStorage.getItem("usermessage");
      if( usermessage && usermessage !== "") {
        setText(usermessage);
      }
      props.allowClick.current = false
      return () => {props.allowClick.current = true};
    }, [])

    const handleChange = (e) => {
      setText(e.target.value)
      localStorage.setItem("usermessage", e.target.value);
    }
    
    const handleSubmit = (e) => {
      props.allowClick.current = true
      e.preventDefault();
      if(text.length < 1){
        alert("กรุณากรอกข้อความ");
        return;
      }
      console.log(`Submitting Message ${text}`)
      localStorage.setItem('message1', text);
      document.body.click()
    }

 
        return (
        <div className="textArea">
        <form onSubmit={handleSubmit} id="messageform" className="nonskip">
        <label className="inputbox-container"> Hello World  </label>
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
      