var babyObj = function()
{
  this.x
  this.y
  this.angle

  this.babyTailTimer = 0 //时间间隔
  this.babyTailCount = 0 //哪一个

  this.babyEyeTimer = 0
  this.babyEyeCount = 0
  this.babyEyeInterval = 1000

  this.babyBodyTimer = 0
  this.babyBodyCount = 0
}
babyObj.prototype.init = function()
{
  this.x = canWidth/2 - 50
  this.y = canHeight/2 + 50
  this.angle = 0
}
babyObj.prototype.draw = function()
{
  this.x = lerpDistance(largeFish.x, this.x, 0.98)
  this.y = lerpDistance(largeFish.y, this.y, 0.98)

  //角度差
  var deltaY = largeFish.y - this.y
  var deltaX = largeFish.x - this.x
  var beta = Math.atan2(deltaY, deltaX) + Math.PI

  //lerp角度
  this.angle = lerpAngle(beta, this.angle, 0.8)

  this.babyTailTimer += deltaTime
  if(this.babyTailTimer > 80)
  {    
    this.babyTailCount = (this.babyTailCount + 1) % 8
    this.babyTailTimer = 0
  } 

  this.babyEyeTimer += deltaTime
  if(this.babyEyeTimer > this.babyEyeInterval)
  {
    this.babyEyeCount = (this.babyEyeCount+1) % 2
    this.babyEyeTimer = 0
    if(this.babyEyeCount === 0)
    {
      this.babyEyeInterval = 2000 + Math.random()*1500
    }
    else
    {
      this.babyEyeInterval = 200
    }
  }

  this.babyBodyTimer += deltaTime
  if(this.babyBodyTimer > 300)
  {
    this.babyBodyCount += 1
    this.babyBodyTimer = 0
    if(this.babyBodyCount > 19)
    {
      this.babyBodyCount = 19
      data.gameover = true
    }
  }

  ctx1.save() 
  ctx1.translate(this.x, this.y)
  ctx1.rotate(this.angle)
  ctx1.drawImage(babyTail[this.babyTailCount], -babyTail[this.babyTailCount].width/2 + 25, -babyTail[this.babyTailCount].height/2)
  ctx1.drawImage(babyBody[this.babyBodyCount], -babyBody[this.babyBodyCount].width/2, -babyBody[this.babyBodyCount].height/2)
  ctx1.drawImage(babyEye[this.babyEyeCount], -babyEye[this.babyEyeCount].width/2, -babyEye[this.babyEyeCount].height/2)
  ctx1.restore()
}

