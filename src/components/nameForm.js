import React from 'react';
import { useState } from 'react';

export function NameForm(props) {
    const [name, setName] = useState("");
    React.useEffect(() => {
        setName("")
        console.log("NameForm: useEffect");
        
        props.allowClick.current = false
        localStorage.removeItem("name");
        return () => {
          
          props.allowClick.current = true
        };
    }, [])
    
    const handleSubmit = (e) => {
      props.allowClick.current = true
      console.log(e)
      e.preventDefault();
      if(name.length < 1){
        alert("กรุณากรอกชื่อของคุณก่อนนะครับ");
        return;
      }
      console.log(`Submitting Name ${name}`)
      localStorage.setItem('name', name);
      document.body.click()
    }
    return (
      <form onSubmit={handleSubmit} className="nonskip">
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