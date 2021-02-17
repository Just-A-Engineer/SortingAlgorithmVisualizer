let canvas = document.querySelector("#sortCanvas");
let ctx = canvas.getContext("2d");
let sortingArray = [];

let resetButton = document.querySelector("#resetButton").addEventListener("click", function reset() {
    drawRect(0, 0, canvas.width, canvas.height, "blue");
    lineDraw();
    console.log("hello from reset");
  });

function canvasSetup() {
  console.log("Hello from the otherside!");
}

function getRndmInt() {
  return Math.floor(Math.random() * canvas.height);
}

function reset() {

  lineDraw();
  console.log("hello from reset");
}

function swap(arr, x, y) {
  let temp = arr[x]
  arr[x] = arr[y]
  arr[y] = temp
}

function bubbleSort() {
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

function insertSort() {
  for(i = 0; i < sortingArray.length; i++) {
    key = sortingArray[i]
    
    j = i-1
    while(j >= 0 && key < sortingArray[j]) {
      sortingArray[j +1] = sortingArray[j];
      j-= 1
    }
    sortingArray[j + 1] = key
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
  
  let sortingChoice = window.prompt("What sorting algorithm would you like to see? (Bubble, Insertion, Quick, Heap, and Merge)");
  
  if(sortingChoice === "bubble sort" || sortingChoice === "Bubble Sort") {
    bubbleSort();
  } else if(sortingChoice === "insertion sort" || sortingChoice === "Insertion Sort") {
    insertSort();
  }
  
  for(i = 0; i < sortingArray.length; i++) {
    draw(i, canvas.height, i, canvas.height - sortingArray[i], "white", 2);
  }
}

drawRect(0, 0, canvas.width, canvas.height, "blue");
lineDraw();