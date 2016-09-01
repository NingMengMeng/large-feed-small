var dustObj = function()
{
  this.x = []
  this.y = []
  this.amp = []
  this.Num = []

  this.alpha
}

dustObj.prototype.num = 30
dustObj.prototype.init = function()
{
  for(var i = 0; i < this.num; i++)
  {
    this.x[i] = Math.random() * canWidth
    this.y[i] = Math.random() * canHeight
    this.amp[i] = Math.random() * 50 + 30
    this.Num[i] = Math.floor(Math.random() * 7)
  }
  this.alpha = 0
}

dustObj.prototype.draw = function()
{
  this.alpha += deltaTime * 0.0005
  var l = Math.sin(this.alpha)
  for(var i = 0; i < this.num; i++)
  {
    var No = this.Num[i]
    ctx1.drawImage(dustPic[No], this.x[i] + this.amp[i] * l, this.y[i])
  }
}
