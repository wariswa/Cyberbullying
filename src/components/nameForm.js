import React from 'react';
import { useState } from 'react';

export function NameForm(props) {
    const [name, setName] = useState("");
    React.useEffect(() => {
        console.log("NameForm: useEffect");
        const backup = document.querySelector("canvas").style;
        document.querySelector("canvas").style.pointerEvents = "none";

        return () => {document.querySelector("canvas").style = backup};
    }, [])
    
    const handleSubmit = (e) => {
      console.log(e)
      e.preventDefault();
      if(name.length < 1){
        alert("กรุณากรอกชื่อของคุณก่อนนะครับ");
        return;
      }
      console.log(`Submitting Name ${name}`)
      localStorage.setItem('name', name);
      const elem = document.querySelector('canvas');
      elem.click()
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          เธอมีชื่อว่าอะไรเอ่ย?
          <input
            className="nameform"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="โปรดใส่ชื่อของคุณ"
            required
          />
        </label>
        <input className="namebutton" type="submit" value="ยืนยัน" onClick={handleSubmit}
        />
      </form>
    );
  }