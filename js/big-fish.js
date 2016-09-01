var bigFish = function()
{
  this.x
  this.y
  this.angle
  this.bigBody = new Image()
  this.bigTailTimer = 0 //时间间隔
  this.bigTailCount = 0 //哪一个

  this.bigEyeTimer = 0
  this.bigEyeCount = 0
  this.bigEyeInterval = 1500

  this.bigBodyCount = 0
}

bigFish.prototype.init = function()
{
  this.x = canWidth/2
  this.y = canHeight/2
  this.angle = 0
  this.bigBody.src = './src/bigSwim0.png'
}
bigFish.prototype.draw = function()
{
  this.x = lerpDistance(mx, this.x, 0.8)
  this.y = lerpDistance(my, this.y, 0.8)

  //角度差
  var deltaY = my - this.y
  var deltaX = mx - this.x
  var beta = Math.atan2(deltaY, deltaX) + Math.PI

  //lerp角度
  this.angle = lerpAngle(beta, this.angle, 0.8)

  this.bigTailTimer += deltaTime
  if(this.bigTailTimer > 80)
  {
    this.bigTailCount = (this.bigTailCount + 1) % 8
    this.bigTailTimer = 0
  }

  this.bigEyeTimer += deltaTime
  if(this.bigEyeTimer > this.bigEyeInterval)
  {
    this.bigEyeCount = (this.bigEyeCount + 1) % 2
    this.bigEyeTimer = 0
    if(this.bigEyeCount === 0)
    {
      this.bigEyeInterval = 2000 + Math.random() * 2000
    }
    else
    {
      this.bigEyeInterval = 300
    }
  }

  ctx1.save()

  ctx1.translate(this.x, this.y)
  ctx1.rotate(this.angle)
  
  ctx1.drawImage(bigTail[this.bigTailCount], -bigTail[this.bigTailCount].width/2 + 30, -bigTail[this.bigTailCount].height/2)
  
  if(data.double === 2){
    ctx1.drawImage(bigBodyBlue[this.bigBodyCount], -bigBodyBlue[this.bigBodyCount].width/2, -bigBodyBlue[this.bigBodyCount].height/2)
  }
  if(data.double === 1){
    ctx1.drawImage(bigBodyOrange[this.bigBodyCount], -bigBodyOrange[this.bigBodyCount].width/2, -bigBodyOrange[this.bigBodyCount].height/2)
  }
  ctx1.drawImage(bigEye[this.bigEyeCount], -bigEye[this.bigEyeCount].width/2, -bigEye[this.bigEyeCount].height/2)

  ctx1.restore()
}
