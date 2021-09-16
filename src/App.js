import React from 'react';
import Fade from '@material-ui/core/Fade';
import { NameForm } from './components/nameForm';
import { RadioForm } from './components/radioForm';
import { Submitbutton } from './components/Button';
import { InputBox } from './components/InputBox';
import {LogoScreen } from './components/LogoScreen';

export const GetName = () => {
  return <> {`สวัสดี ${localStorage.getItem("name")} วันนี้เธอเป็นอย่างไรบ้าง?`}</>
}


export const App = () => {
  const [count, setCount] = React.useState(0)
  const [textcolor, setTextColor] = React.useState('#ffffff')

  const content = [
    <LogoScreen></LogoScreen>,
    "*Trigger Warning*",
    <>{"เว็บไซต์นี้มีคำถามเกี่ยวกับเหตุการณ์หรือประสบการณ์ในอดีตของตัวคุณ"} <br/> {"ซึ่งอาจมีผลกระทบต่อจิตใจคุณ ไม่มากก็น้อย"}</>,
    "หากคำถามของเราทำให้คุณรู้สึกไม่สบายใจหรืออึดอัด สามารถออกจากเว็บไซต์เราได้ทันที",
    <>{"เว็บไซต์นี้ ไม่มีการเก็บข้อมูลจากผู้ใช้งาน เพียงแต่ต้องการเป็นส่วนหนึ่ง"} <br/> {"ในการส่งเสริมการใช้สื่อสังคมออนไลน์อย่างมีสติ"}</>, 
    "ไม่สายไปที่จะหยุด...",
    "Cyber Bullying",
    //flash
    //same canvas
    //nameForm appear
    <NameForm></NameForm>,
    <GetName></GetName>, //name of users
    <RadioForm></RadioForm>,
    //HowAreYou Radio Form
    "ขอให้วันนี้เป็นวันที่ดีสำหรับเธอนะ",
    "ฉันก็รู้สึกแบบเดียวกันกับเธอ",
    "เพราะฉันคือเธอในโลกคู่ขนาน",
    "โลกที่ทุกคนเป็นใครก็ได้ที่ตัวเองต้องการ",
    "โลกที่ตัวอักษรทำให้คนหายไปได้...",
    "wwwww",
    "qqqqqq",
    "qaqaqaqqaq",
    //wait for 3 seconds
    //fade to canvas 2
    <InputBox></InputBox>,
    <Submitbutton handleCount={setCount}></Submitbutton>
      
]
  // const [loading, setLoading] = React.useState(false);
  let loading = false;
  const [fade, setFade] = React.useState(true);
  const canvasRef = React.useRef()

  React.useEffect(() => {
    if(!document.getElementById("canvas1script")){
      const canvas1script = document.createElement("script")
      canvas1script.id = "canvas1script"
      canvas1script.src = "canvas1.js"
      document.getElementsByTagName("body").item(0).appendChild(canvas1script)
    }

    document.addEventListener("click", (e)=> {
      if (e.path.map(p=>p.id).includes("mytext")) {
        return 
      }
      
      if(loading){
        e.preventDefault()
        e.stopPropagation()
        return
      }
      loading = true;
      setFade(false);
      setTimeout(()=>{
        setCount(prevCount => prevCount + 1)
        setFade(true);
      }, 1000)
      
      setTimeout(function () {
        loading = false;
      }, 2000)
  })
}, [])

  const getComponent = (count) => {
    return content[count]

  }
  React.useEffect (() => {
    if (count === 14) {
      document.getElementById("canvas1").id = "canvas2"
      document.getElementById("canvas1script").remove()
      const canvas2script = document.createElement("script")
      canvas2script.id = "canvas2script"
      canvas2script.src = "./aurora.js"
      document.getElementsByTagName("body").item(0).appendChild(canvas2script)
      
    }
  }, [count])

  return <>
  <div id="root"> 
    <div style={{zIndex: 1, color: textcolor}} id="mytext">
      <Fade in={fade} timeout={1000}>
        <div style={{}}>
          {getComponent(count)}
        </div>
      </Fade>
    </div>
  </div>
  <canvas ref={canvasRef} id="canvas1"></canvas>
  </>;
}