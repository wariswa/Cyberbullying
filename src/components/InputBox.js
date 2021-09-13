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
      console.log(e)
      console.log(e.target)
      setText(e.target.value)
    }
    
    const handleSubmit = (e) => {
      console.log(e)
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
          {/* <label className="inputbox-container">
            เท่าที่จำได้ เธอเคยพิมพ์ว่าอะไรบ้างล่ะ?
            <input
              className="inputbox"
              type="text"
              value={text} //ตอนแรกมันเป็น name
              onChange={e => setText(e.target.value)}
              placeholder="โปรดกรอกข้อความที่นี่"
              required
              id="message"
            />
          </label> */}
          {/* <div id="message" contenteditable="true">Fill out this form</div> */}
          <textarea id="message" onChange={handleChange} value={text}></textarea>
          <input className="submit-button" type="submit" value="ยืนยัน" onClick={handleSubmit}
          />
          </label>
        </form>
      );

}
      