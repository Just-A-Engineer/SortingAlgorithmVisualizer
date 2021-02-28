//Sets Variables Up for Canvas and Canvas Context(ctx)
let canvas = document.querySelector("#sortCanvas");
let ctx = canvas.getContext("2d");
//Sets Variable sortingArray to be an Array
let sortingArray = [];

//Adding an event listener to #resetButton in HTML
let resetButton = document.querySelector("#resetButton").addEventListener("click", function reset() {
    //Clears Canvas and Re-Runs through LineDraw Function
    drawRect(0, 0, canvas.width, canvas.height, "blue");
    lineDraw();
  });
  
//Grabs random integer between 1 and the Height of the Canvas
function getRndmInt() {
  return Math.floor(Math.random() * canvas.height);
}

//This function is called in Bubble Sort function and swaps two values
function swap(arr, x, y) {
  let temp = arr[x]
  arr[x] = arr[y]
  arr[y] = temp
}

//Bubble Sorting Algorithm
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

//Insertion Sort Algorithm
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

//Quick Sort Algorithm
function quickSort(arr, low, high) {
  //Partition Function assigns pivot variable to be the higher value of array assigned within parameters
  function partition(arr, low, high) {
    let i = (low - 1);
    let pivot = arr[high];
    for(j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i = i + 1
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
    let temp2 = arr[i+1]
    arr[i+1] = arr[high]
    arr[high] = temp2
      
    return (i + 1)
  }
  
  if(low < high) {
    p = partition(arr, low, high);
    
    quickSort(arr, low, p - 1);
    quickSort(arr, p + 1, high);
  }
}


function heapSort(arr) {
  function heapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    
    if(l < n && arr[largest] < arr[l]) {
      largest = l;
    }
  
    if(r < n && arr[largest] < arr[r]) {
      largest = r;
    }
  
    if(largest != i) {
      temp = arr[i];
    
      arr[i] = arr[largest];
      arr[largest] = temp;
      
      heapify(arr, n, largest);
    }
    
    return arr
  }

  let n = arr.length;
  let i = Math.floor(n / 2 - 1);
  let k = n - 1
  
  
  while(i >= 0) {
    heapify(arr, n, i)
    i--
  }
  
  while(k >= 0) {
    temp = arr[0];
    
    arr[0] = arr[k];
    arr[k] = temp;
    
    heapify(arr, k, 0);
    
    k--
  }
  
  return arr
}

//Draws all of the lines and prompts the user what type of sorting they would like to take place.
function lineDraw() {
  //Draw function assigns line drawing to a single function
  function draw(x, y, a, b, color, lineWid) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWid;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(a, b);
    ctx.stroke();
  }
  //Assigns a random integer to sortingArray at index i
  for(i = 0; i < canvas.width; i++) {
    sortingArray[i] = getRndmInt();
  }
  //Assigns sorting choice to be the answer to the window prompt
  let sortingChoice = window.prompt("What sorting algorithm would you like to see? (Bubble, Insertion, Quick, Heap, and Merge)");
  //Checks to see what sorting choice is decided via sortingChoice
  if(sortingChoice === "bubble sort" || sortingChoice === "Bubble Sort" || sortingChoice === "bubble" || sortingChoice === "Bubble") {
    bubbleSort();
  } else if(sortingChoice === "insertion sort" || sortingChoice === "Insertion Sort" || sortingChoice === "insertion" || sortingChoice === "Insertion") {
    insertSort();
  } else if(sortingChoice === "quick sort" || sortingChoice === "Quick Sort" || sortingChoice === "quick" || sortingChoice === "Quick") {
    quickSort(sortingArray, 0, sortingArray.length-1);
  } else if(sortingChoice === "heap sort" || sortingChoice === "Heap Sort" || sortingChoice === "heap" || sortingChoice === "Heap") {
    heapSort(sortingArray);
  }
  //Actually draws lines sortingArray.length times
  for(i = 0; i < sortingArray.length; i++) {
    draw(i, canvas.height, i, canvas.height - sortingArray[i], "white", 2);
  }
}

//Draw rectangle where sorting takes place
function drawRect(x, y, width, height, color) {
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.fillStyle = color;
  ctx.fill();
}

//Calls the initial drawRect and lineDraw functions
drawRect(0, 0, canvas.width, canvas.height, "blue");
lineDraw();