Sorting Algorithm Visualizer
============================

###
This is a really ***fun*** project I've been working on recently.

This has taught me a *lot* of different stuff. Like how to read and write adequate and proper JavaScript. Some of the stuff it taught me was, as follows,

- How to Solve Bugs in My Code
- How to Solve Problems with My Code
- How to Write Proper Algorithms
- How to Properly Comment Out Code

I've also ran into a couple problems which has really helped me figure out how to solve these sort of problems. For instance, this line of code here.

```javascript
  function lineDraw() {
    function draw(x, y, a, b, color, lineWid) {
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWid;
    
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(a, b);
      ctx.stroke();
    }
  
  for(i = 0; i < canvas.width; i++) {
    sortingArray[i] = getRndmInt();
  }
  
  for(i = 0; i < sortingArray.length; i++) {
    draw(i, canvas.height, i, canvas.height - sortingArray[i], "white", 2);
  }
```

I ran into multiple issues writing these lines of code, because I believed it should be written more so as a for loop within a for loop. It caused plenty of more issues than it resolved.

```javascript
  for(i = 0; i < canvas.width; i++) {
    for(j = 0; j < sortingArray.length; j++) {
      sortingArray[i] = getRndmInt();
      
      draw(j, canvas.height, j, canvas.height - sortingArray[j], "white", 2);
    }
  }
```

As you can see, this not only causes new lines to be drawn i times, which is iterated j times. It caused long wait times and the scene to be very cluttered with lines. I figured this out by doing some basic debugging. Very basic debugging, but it worked nonetheless. It's still a work in progress, but I'm loving working on it for the time being.
