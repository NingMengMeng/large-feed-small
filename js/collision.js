//判断大鱼与果实的距离
function largeFruitsCollision()
{
  if(!data.gameover)
  {
    for(var i = 0; i < fruit.num; i++)
    {
      if(fruit.alive[i])
      {
        var l = calLength2(largeFish.x, largeFish.y, fruit.x[i], fruit.y[i])
        if(l < 900)
        {
          isBigEatFood = true
          fruit.dead(i)
          data.fruitNum ++
          largeFish.bigBodyCount ++
          if(largeFish.bigBodyCount > 7)
          {
            largeFish.bigBodyCount = 7
          }
          if(fruit.fruitType[i] === 'blue')
          {
            data.double = 2
          }
          wave.born(largeFish.x, largeFish.y)
        }
      }
    }
  }
   
}

function largeSmallCollision()
{
  if(!data.gameover && data.fruitNum > 0)
  {
    var l = calLength2(largeFish.x, largeFish.y, baby.x, baby.y)
    if(l < 900)
    {
      feed.born(baby.x, baby.y)
      baby.babyBodyCount = 0
      largeFish.bigBodyCount = 0
      data.score += data.fruitNum * 100 * data.double
      data.reset()
    }
  }
}
