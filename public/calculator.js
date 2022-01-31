
var oRows = document.getElementById('table').getElementsByTagName('tr');
var p = document.getElementsByTagName('p');
var input = document.getElementsByTagName('input');

//dynamic creating java script 
for (let i = 0; i < 5; i++) {
  addColumn()
}


function UpdateMean(e) {

  var toAdd = oRows.length - 1;
  var num = 0;
  var x = 0;
  for (let i = 0; i < toAdd; i++) {

    x = (input[i * 3 + 1].value / input[i * 3 + 2].value)

    if (isNaN(x) || !isFinite(x)) {
      x = 0;
      p[i].textContent = 0 + "%";

    }

    num += x;

  }

  var result = (num / toAdd).toFixed(4);
  var update = document.getElementById('result');
  if (isNaN(result) || !isFinite(result)) {
    x = 0;
    update.textContent ="Invalid check entry";

  } else {
    
    update.textContent = "Mean = " + result;
  }

}

function UpdateWeighted(e) {

  var toAdd = oRows.length - 1;
  var num = 0;
  var x = 0;

  var den = 0;
  for (let i = 0; i < toAdd; i++) {

    x = (input[i * 3 + 1].value / input[i * 3 + 2].value) * input[i * 3].value;
    if (isNaN(x) || !isFinite(x)) {
      x = 0;
      p[i].textContent = 0 + "%";
    }
    den += parseFloat(input[i * 3].value);
    num += x;
  }

  var result = (num / den).toFixed(4);
  
  var update = document.getElementById('result');
  if (isNaN(result) || !isFinite(result)) {
    update.textContent = "Invalid check entries";
  } else {
   
    update.textContent = "Weighted = " + result;
  }

}



function addColumn() {

  var iRowCount = oRows.length;
  var row = table.insertRow(iRowCount);//when undefindd value deafult behavior to insert row at bottom
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  cell1.innerHTML = "Activity " + iRowCount;
  cell2.innerHTML = "A" + iRowCount;


  //disable negative input plus scroll limit 0
  cell3.innerHTML = '<input type="number" class="calculate" oninput="validity.valid||(value=\'\');" min="0" step="0.01" placeholder="0"></input>';
  cell4.innerHTML = '<input type="number" class="calculate" oninput="validity.valid||(value=\'\');"min="0"step="0.01" placeholder="0"></input> / ';
  //min 1 for denominator 
  cell4.innerHTML += '<input type="number" class="calculate" oninput="validity.valid||(value=\'\');"min="0"step="0.01" placeholder="0"></input>';
  cell5.innerHTML = '<p>0%</p>'


  var percent_row = iRowCount - 1;

  input[percent_row * 3 + 1].addEventListener('input', function (e) { updateValue(e, percent_row) });
  input[percent_row * 3 + 2].addEventListener('input', function (e) { updateValue(e, percent_row) });
  function updateValue(e, pram1) {

    var x = ((input[percent_row * 3 + 1].value / input[percent_row * 3 + 2].value) * 100).toFixed(2);
    if (isNaN(x) || !isFinite(x)) {
      x = 0;
      p[percent_row].textContent = 0 + "%";

    } else {


      p[percent_row].textContent = x + "%";

    }


  }

}






var button = document.getElementById("add_activity");
var cal = document.getElementById("calculate");
var del=document.getElementById("delete_activity")
var mean = document.getElementById("mean");
var weight = document.getElementById("weight")
del.onclick=function(e) {
  
  var x=oRows.length; 
  if(x>2){
    table.deleteRow(oRows.length-1);
  }
  
}
mean.onclick = function (evt) { UpdateMean(); }
weight.onclick = function (evt) { UpdateWeighted(); }
button.onclick = function (evt) { addColumn(); }

//getting input
// var p=document.getElementsByTagName('p');
// var input=document.getElementsByTagName('input');
// input[1].addEventListener('input',updateValue);
// function updateValue(e) {
//   p[0].textContent=(input[1].value/input[2].value)*100;
//   console.log(e.target.value);
// }

