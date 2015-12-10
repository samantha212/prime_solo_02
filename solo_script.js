// ! ! !
// Three Bugs
//Error 1: The incorrect array was being called.  2-D array, so we need two indices indicated when we call in 
//order to the the right information. 
//Error 2: Function getBaseSTI was returning the wrong amount.  Do not need to subtract 1 before returning bonus. 
//Error 3: newArray[2] was returning too many decimal places.  Added .toFixed(2) to ensure 2 decimal places. 
var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array);
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i].join(', '));
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(array1){
  var newArray = [];
//Incorrect array index was being called.  Also changed for var employeeNumber, baseSalary, and reviewScore.
  newArray[0] = array1[i][0]
//Need to update the array being called (see comment above).
  var employeeNumber = array1[i][1];
  var baseSalary = array1[i][2];
  var reviewScore = array1[i][3];
//Bonus adds the three components of the bonus calculations to get the final bonus percentage.
  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }
//This pushes the info to the newArray.
  newArray[1] = bonus;
  //newArray[2] was returning with too many decimal places.  Set to fixed amount of 2. 
  newArray[2] = (baseSalary * (1.0 + bonus)).toFixed(2);
  newArray[3] = Math.round(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}


function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  //Was returning wrong amount.  Do not need to subtract 1 before returning. 
  return basePercent;
}
//This looks good.
function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}