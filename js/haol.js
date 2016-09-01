var feedObj = function()
{
  this.x = []
  this.y = []
  this.alive = []
  this.r = []
}

feedObj.prototype.num = 15
feedObj.prototype.init = function()
{
  for(var i = 0; i < this.num; i++)
  {
    this.alive[i] = false
  }
}

feedObj.prototype.draw = function()
{
  ctx1.save()
  ctx1.lineWidth = 2
  ctx1.shadowBlur = 10
  ctx1.shadowColr = 'rgba(203, 91, 0, 1)'
  for(var i = 0; i < this.num; i++)
  {
    if(this.alive[i])
    {
      var alpha
      this.r[i] += deltaTime * 0.05
      if(this.r[i] > 80)
      {
        this.alive[i] = false
        break
      }
      alpha = 1 - this.r[i]/80
      //draw
      ctx1.beginPath()
      ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2)
      ctx1.strokeStyle = 'rgba(203, 91, 0, ' + alpha + ')'
      ctx1.stroke()
      ctx1.closePath()
    }
  }
  ctx1.restore()
}

feedObj.prototype.born = function(x, y)
{
  for(var i = 0; i< this.num; i++)
  {
    if(!this.alive[i])
    {
      this.r[i] = 20
      this.alive[i] = true
      this.x[i] = x
      this.y[i] = y
      return
    }
  }
}
