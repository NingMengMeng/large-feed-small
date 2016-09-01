var can1,can2,ctx1, ctx2, lastTime, deltaTime
var bgPic = new Image()
var canWidth, canHeight
var ane, fruit, bigFish, baby, data, wave, feed, dust
var mx, my

var babyTail = []
var babyEye = []
var babyBody = []
var bigTail = []
var bigEye = []
var bigBodyOrange = []
var bigBodyBlue = []

var dustPic = []

//body加载完成
document.body.onload = game

function game()
{
  init()
  lastTime = Date.now()
  gameloop()
}

function init()
{
  //获得canvas context
  can1 = document.getElementById('canvas1')
  ctx1 = can1.getContext('2d')
  can2 = document.getElementById('canvas2')
  ctx2 = can2.getContext('2d')

  can1.addEventListener('mousemove',onMouseMove, false)

  bgPic.src='./src/background.jpg'
  canWidth = can1.width
  canHeight = can1.height

  ane = new aneObj()
  ane.init()

  fruit = new fruitObj()
  fruit.init()

  largeFish = new bigFish()
  largeFish.init()

  mx = canWidth * 0.5
  my = canHeight * 0.5

  baby = new babyObj()
  baby.init()

  for(var i = 0; i < 8; i++)
  {
    babyTail[i] = new Image()
    babyTail[i].src = './src/babyTail' + i + '.png'
    bigTail[i] = new Image()
    bigTail[i].src = './src/bigTail' + i + '.png'
    bigBodyOrange[i] = new Image()
    bigBodyOrange[i].src = './src/bigSwim' + i + '.png'
    bigBodyBlue[i] = new Image()
    bigBodyBlue[i].src = './src/bigSwimBlue' + i + '.png'
  }

  for(var i = 0; i < 2; i++)
  {
    babyEye[i] = new Image()
    babyEye[i].src = './src/babyEye' + i + '.png'
    bigEye[i] = new Image()
    bigEye[i].src = './src/bigEye' + i + '.png'
  }

  for(var i = 0; i < 20; i++)
  {
    babyBody[i] = new Image()
    babyBody[i].src = './src/babyFade' + i + '.png'
  }
  data = new dataObj()
  ctx1.fillStyle = 'white'
  ctx1.font='20px Verdana'
  ctx1.textAlign = 'center'

  wave = new waveObj()
  wave.init()
  feed = new feedObj()
  feed.init()

  for(var i = 0; i < 7; i++)
  {
    dustPic[i] = new Image()
    dustPic[i].src = './src/dust' + i + '.png'
  }
  dust = new dustObj()
  dust.init()
}

//游戏循环
function gameloop()
{
  requestAnimFrame(gameloop)
  var now = Date.now()
  deltaTime = now - lastTime
  lastTime = now

  if(deltaTime > 40) deltaTime = 40

  drawBackground()
  ane.draw()
  fruit.draw()
  fruitMonitor()

  ctx1.clearRect( 0, 0, canWidth, canHeight)
  largeFish.draw()
  largeFruitsCollision()
  largeSmallCollision()
  baby.draw()
  data.draw()
  wave.draw()
  feed.draw()
  dust.draw()
}

function onMouseMove(e)
{
  if(!data.gameover)
  {
    if(e.offSetX || e.layerX)
    {
      mx = e.offSetX ? e.offSetX : e.layerX
      my = e.offSetY ? e.offSetY : e.layerY
    }
  }
}
