import React from 'react';
import ReactDOM from 'react-dom';
// import fade from "fade";
import Fade from '@material-ui/core/Fade';
import { NameForm } from './components/nameForm';
import { renderToString } from 'react-dom/server'
import { RadioForm } from './components/radioForm';

export const GetName = () => {
  return <> {`สวัสดี ${localStorage.getItem("name")} วันนี้เธอเป็นอย่างไรบ้าง?`}</>
}

export const App = () => {
  const content = [
    <RadioForm></RadioForm>,
    <NameForm></NameForm>,
    "*Trigger Warning*",
    <>{"เว็บไซต์นี้มีคำถามเกี่ยวกับเหตุการณ์หรือประสบการณ์ในอดีตของตัวคุณ"} <br/> {"ซึ่งอาจมีผลกระทบต่อจิตใจคุณ ไม่มากก็น้อย"}</>,
    "หากคำถามของเราทำให้คุณรู้สึกไม่สบายใจหรืออึดอัด สามารถออกจากเว็บไซต์เราได้ทันที",
    <>{"เว็บไซต์นี้ ไม่มีการเก็บข้อมูลจากผู้ใช้งาน เพียงแต่ต้องการเป็นส่วนหนึ่ง"} <br/> {"ในการส่งเสริมการใช้สื่อสังคมออนไลน์อย่างมีสติ"}</>, 
    "ไม่สายไปที่จะหยุด...",
    "Cyber Bullying",
    //flash
    //same canvas
    //nameForm appear
    
    <GetName></GetName>, //name of users
    
    //HowAreYou Radio Form
    "ขอให้วันนี้เป็นวันที่ดีสำหรับเธอนะ",
    "ฉันก็รู้สึกแบบเดียวกันกับเธอ",
    "เพราะฉันคือเธอในโลกคู่ขนาน",
    "โลกที่ทุกคนเป็นใครก็ได้ที่ตัวเองต้องการ",
    "โลกที่ตัวอักษรทำให้คนหายไปได้..."
    //wait for 3 seconds
    //fade to canvas 2
      
]
  const [count, setCount] = React.useState(0)
  // const [loading, setLoading] = React.useState(false);
  let loading = false;
  const [fade, setFade] = React.useState(true);

  React.useEffect(() => {
    console.log("useEffect")

    document.getElementById("canvas1").addEventListener("click", (e)=> {
      if(count >= 6){
        if(!localStorage.getItem("name") || localStorage.getItem("name") === ""){
          alert("กรุณากรอกชื่อของคุณก่อนนะครับ")
        }
      }
      if(loading){
        console.log("loading is true", loading)
        e.preventDefault()
        e.stopPropagation()
        return
      }
      loading = true;
      console.log("fading is true, setting it to false", fade)
      setFade(false);
      setTimeout(()=>{
        console.log("current count is, ", count)
        setCount((prev) => prev+1)
        console.log("current fade is", fade)
        setFade(true);
      }, 1000)
      
      // loading = true
      // const elem = document.getElementById("mytext")
      // fade.out(elem, 1000);
      // setTimeout(function () {
      //   elem.innerHTML = content[count];
      //   console.log("current count is", count)
      //   count += 1
      //   fade.in(elem, 1000);
      // }, 1000);
      setTimeout(function () {
        loading = false;
      }, 2000)
  })
}, [])

  const getComponent = (count) => {
    return content[count]

  }

  return <div style={{zIndex: 1, color:"white"}} id="mytext">
    <Fade in={fade} timeout={1000}>
      <div style={{}}>
        {getComponent(count)}
      </div>
    </Fade>
  </div>;
}