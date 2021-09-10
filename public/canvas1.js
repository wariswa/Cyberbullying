var n_stars = 150
var colors = [ '#176ab6', '#fb9b39']
for ( let i = 0; i < 98; i++) {
  colors.push( '#fff')
}

var canvas1 = document.querySelector('canvas')
canvas1.width = window.innerWidth
canvas1.height = window.innerHeight

document.addEventListener( 'resize', () => {
  canvas1.width = window.innerWidth
  canvas1.height = window.innerHeight
  stars = []
  init()
})

canvas1.style.background = '#000'
var c = canvas1.getContext('2d')

const randomInt = ( max, min) => Math.floor( Math.random() * (max - min) + min)

var bg = c.createRadialGradient( canvas1.width/ 2, canvas1.height * 3, canvas1.height ,canvas1.width/ 2,canvas1.height , canvas.height * 4);
bg.addColorStop(0,"#32465E");
bg.addColorStop(.4,"#000814");
bg.addColorStop(.8,"#000814");
bg.addColorStop(1,"#000");

class Star {
  constructor( x, y, radius, color) {
    this.x = x || randomInt( 0, canvas1.width)
    this.y = y || randomInt( 0, canvas1.height)
    this.radius = radius || Math.random() * 1.1
    this.color = color || colors[randomInt(0, colors.length)]
    this.dy = -Math.random() * .3
  }
  draw () {
    c.beginPath()
    c.arc( this.x, this.y, this.radius, 0, Math.PI *2 )
    c.shadowBlur = randomInt( 3, 15)
    c.shadowColor = this.color
    c.strokeStyle = this.color
    c.fillStyle = 'rgba( 255, 255, 255, .5)'
    c.fill()
    c.stroke()
    c.closePath()
  }
  update( arrayStars = [] ) {
    if ( this.y - this.radius < 0 ) this.createNewStar( arrayStars )
    
    this.y += this.dy
    this.draw()
  }
  createNewStar( arrayStars = [] ) {
    let i = arrayStars.indexOf( this )
    arrayStars.splice( i, 1)
    arrayStars.push( new Star( false, canvas1.height + 5))
  }
}
var stars = []
function init() {
  for( let i = 0; i < n_stars; i++ ) {
    stars.push( new Star( ) )
  }
}
init()

function animate() {
  requestAnimationFrame( animate)
  c.clearRect( 0, 0, canvas1.width, canvas1.height)
  c.fillStyle = bg
  c.fillRect(0, 0, canvas1.width, canvas1.height)
  stars.forEach( s => s.update( stars ))
}
animate()