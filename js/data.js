var dataObj = function()
{
  this.fruitNum = 0
  this.double = 1
  this.score = 0
  this.gameover = false
  this.alpha = 0
}
dataObj.prototype.reset = function()
{
  this.fruitNum = 0
  this.double = 1
}

dataObj.prototype.draw = function()
{
  var w = can1.width
  var h = can1.height

  ctx1.save()
  ctx1.shadowBlur = 10
  ctx1.shadowColor = 'white'
  ctx1.fillText('SCORE: ' + this.score, w * 0.5, h - 20)

  if(this.gameover)
  {
    this.alpha += 0.001 * deltaTime
    ctx1.fillStyle = 'rgba(255, 255, 255, ' + this.alpha + ')'
    ctx1.fillText('GAME OVER',  w * 0.5, h * 0.5)
  }
  ctx1.restore()

}
