var fruitObj = function()
{
  this.alive = []
  this.x = []
  this.y = []
  this.aneNum = []
  this.l = []
  this.sped = []
  this.fruitType = []
  this.orange = new Image()
  this.blue = new Image()
}

fruitObj.prototype.num = 30
fruitObj.prototype.init = function()
{
  for(var i = 0; i < this.num; i++)
  {
    this.alive[i] = false
    this.x[i] = 0
    this.y[i] = 0
    this.aneNum[i] = 0
    this.l[i] = 0
    this.sped[i] = Math.random() * 0.01 + 0.005
    this.fruitType[i] = ''
  }
  this.orange.src = './src/fruit.png'
  this.blue.src = './src/blue.png'
}

fruitObj.prototype.draw = function()
{
  for(var i = 0; i < this.num; i++)
  {
    var pic
    if(this.fruitType[i] === 'blue')
    {
      pic = this.blue 
    }
    else
    {
      pic = this.orange
    }
    if(this.alive[i] === true){
      if(this.l[i] <= 14) {
        this.x[i] = ane.headx[this.aneNum[i]]
        this.y[i] = ane.heady[this.aneNum[i]]
        this.l[i] += this.sped[i] * deltaTime
        ctx2.drawImage(pic, this.x[i] - this.l[i]/2, this.y[i] - this.l[i]/2, this.l[i], this.l[i])
      }
      else
      {
        this.y[i] -= this.sped[i] * 3 * deltaTime
        ctx2.drawImage(pic, this.x[i] - this.l[i]/2, this.y[i] - this.l[i]/2, this.l[i], this.l[i])
      }
      
      if(this.y[i] < 10)
      {
        this.alive[i] = false
      }
    }
  }
}
fruitObj.prototype.born = function(i)
{
  this.aneNum[i] = Math.floor(Math.random() * ane.num)
  this.l[i] = 0
  this.alive[i] = true
  if(Math.random() < 0.15)
  {
    this.fruitType[i] = 'blue'
  }
  else
  {
    this.fruitType[i] = 'orange'
  }
  
}
fruitObj.prototype.dead = function(i)
{
  if(this.l[i] > 14){
    this.alive[i] = false
  }
}

function fruitMonitor()
{
  var num = 0
  for(var i = 0; i < fruit.num; i++)
  {
    if(fruit.alive[i]) num++
  }

  if(num < 15)
  {
    sendFruit()
    return
  }
}

function sendFruit()
{
  for(var i = 0; i < fruit.num; i++)
  {
    if(fruit.alive[i] === false){
      fruit.born(i)
      return
    }
  }
}
