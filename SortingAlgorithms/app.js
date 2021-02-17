let canvas = document.querySelector("#sortCanvas");
let ctx = canvas.getContext("2d");
let sortingArray = [];

function canvasSetup() {
  console.log("Hello from the otherside!");
}

function getRndmInt() {
  return Math.floor(Math.random() * canvas.height);
}

function swap(arr, x, y) {
  let temp = arr[x]
  arr[x] = arr[y]
  arr[y] = temp
}

function bubbleSort() {
  //Need to run an algorithm that loops through the sortingArray and sorts it in Bubble Sort fashion
  for(i = 0; i < sortingArray.length; i++) {
    for(j = 0; j < sortingArray.length-i-1; j++) {
      let a = sortingArray[j];
      let b = sortingArray[j + 1];
      if(a > b) {
        swap(sortingArray, j, j + 1);
      }
    }
  }
}

function drawRect(x, y, width, height, color) {
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.fillStyle = color;
  ctx.fill();
}

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
  
  bubbleSort();
  
  for(i = 0; i < sortingArray.length; i++) {
    draw(i, canvas.height, i, canvas.height - sortingArray[i], "white", 2);
  }
}

drawRect(0, 0, canvas.width, canvas.height, "blue");
lineDraw();