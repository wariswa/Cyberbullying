import React, {useState, useEffect, useRef} from 'react';
import Fade from '@material-ui/core/Fade';
import { NameForm } from './components/nameForm';
import { RadioForm } from './components/radioForm';
import { Submitbutton } from './components/Button';
import { InputBox } from './components/InputBox';
import {LogoScreen } from './components/LogoScreen';
import * as PIXI from 'pixi.js';
import { DropShadowFilter } from '@pixi/filter-drop-shadow';

export const GetName = () => {
  return <> {`สวัสดี ${localStorage.getItem("name")} วันนี้เธอเป็นอย่างไรบ้าง?`}</>
}

const randomInt = ( max, min) => Math.floor( Math.random() * (max - min) + min)

export const App = () => {
  const [count, setCount] = useState(0)
  const [textcolor, setTextColor] = useState('#ffffff')
  const allowClick = useRef(true)

  const content = [
    <InputBox allowClick={allowClick}></InputBox>,
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
    <NameForm allowClick={allowClick}></NameForm>,
    <GetName></GetName>, //name of users
    <RadioForm allowClick={allowClick}></RadioForm>,
    //HowAreYou Radio Form
    "ขอให้วันนี้เป็นวันที่ดีสำหรับเธอนะ",
    "ฉันก็รู้สึกแบบเดียวกันกับเธอ",
    "เพราะฉันคือเธอในโลกคู่ขนาน",
    "โลกที่ทุกคนเป็นใครก็ได้ที่ตัวเองต้องการ",
    "โลกที่ตัวอักษรทำให้คนหายไปได้...",
    //wait for 3 seconds
    //fade to canvas 2
    
    <Submitbutton handleCount={setCount} allowClick={allowClick}></Submitbutton>
      
]
  // const [loading, setLoading] = React.useState(false);
  let loading = useRef(false);
  const [fade, setFade] = useState(true);

  const handleClick = (e) => {
    console.log(e)
    // if event path elements contains "nonskip" as classname, return
    if (e.path.find(e => e?.classList?.contains("nonskip"))) return;
    if(!allowClick.current){
      return;
    }
    // if (e.path.map(p=>p.classList).includes("nonskip")) {
    //   return 
    // }
    if(loading.current){
      e.preventDefault()
      e.stopPropagation()
      return
    }
    loading.current = true;
    setFade(false);
    setTimeout(()=>{
      setCount(prevCount => prevCount + 1)
      setFade(true);
    }, 1000)
    
    setTimeout(function () {
      loading.current = false;
    }, 2000)
  }

  useEffect(()=> {
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      antialias: true,
      transparent: true,
      resolution: 1
    })
    app.renderer.backgroundColor = 0x000000;
    document.body.appendChild(app.view)
    document.addEventListener("click", handleClick)
    document.addEventListener("touchstart", handleClick)
    
    let c, bg;

    function gradient() {
      const canvas1 = document.createElement('canvas');
      c = canvas1.getContext('2d');
      bg = c.createRadialGradient(
        canvas1.width / 2,
        canvas1.height * 3,
        canvas1.height,
        canvas1.width / 2,
        canvas1.height,
        canvas1.height * 4
      );
      bg.addColorStop(0, '#32465E');
      bg.addColorStop(0.4, '#000814');
      bg.addColorStop(0.8, '#000814');
      bg.addColorStop(1, '#000');
      c.fillStyle = bg;
      c.fillRect(0, 0, window.innerWidth, window.innerWidth);
      const base = new PIXI.BaseTexture.from(canvas1);
      const texture = new PIXI.Texture(base);
      const sprite = new PIXI.Sprite(texture);
      sprite.width = window.innerWidth;
      sprite.height = window.innerHeight;
      return sprite;
    }

    // let container = new PIXI.Container();
    // container.addChild(gradient());
    app.stage.addChild(gradient());

    var n_stars = 150
    var colors = [ '#176ab6', '#fb9b39']
    for ( let i = 0; i < 98; i++) {
      colors.push( '#fff')
    }
    var g = new PIXI.Graphics() ;
    var dropShadowFilter = new DropShadowFilter();
        dropShadowFilter.color = 0xffffff;
        dropShadowFilter.alpha = 0.5;
        dropShadowFilter.blur = 10;
        dropShadowFilter.distance = 2;
        g.filters = [dropShadowFilter];
    app.stage.addChild(g)
    
    class Star {

      constructor( x, y, radius, color) {
        this.x = x || randomInt( 0, window.innerWidth)
        this.y = y || randomInt( 0, window.innerHeight)
        this.radius = radius || Math.random() * 2
        this.color = color || colors[randomInt(0, colors.length)]
        this.dy = -Math.random() * .3 
      }
      
      draw () {
        g.beginFill(0xffffff, 0.5)
        g.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        
        
        g.endFill()
        
      }
      update( arrayStars = [] ) {
        if ( this.y - this.radius < 0 ) this.createNewStar( arrayStars )
        
        this.y += this.dy
        this.draw()
      }
      createNewStar( arrayStars = [] ) {
        let i = arrayStars.indexOf( this )
        arrayStars.splice( i, 1)
        arrayStars.push( new Star( false, window.innerHeight + 5))
      }
    }
    var stars = []
    function init() {
      for( let i = 0; i < n_stars; i++ ) {
        stars.push( new Star( ) )
      }
    }
    init()
    document.addEventListener( 'resize', () => {
      stars = []
      init()
    })
    function animate() {
      requestAnimationFrame( animate)
      // c.clearRect( 0, 0, window.innerWidth, window.innerHeight)
      // c.fillStyle = bg
      // c.fillRect(0, 0, window.innerWidth, window.innerHeight)
      g.clear()
      stars.forEach( s => s.update( stars ))
      // app.renderer.render( app.stage)
    }
    animate()
    
    return () => {
      app.destroy(true)
    }

  }, [])

  /*React.useEffect(() => {
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
}, [])*/

  const getComponent = (count) => {
    return content[count]

  }
  

  return <div id="root"> 
      <Fade in={fade} timeout={1000}>
    <div style={{zIndex: 1, color: textcolor}} id="mytext">
        {getComponent(count)}
    </div>
      </Fade>
  </div>
}