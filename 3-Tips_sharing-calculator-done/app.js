/*

ALGORITHM:

1.Ask the input about Bill value,Tip percentage ,No.of.people....
2.Calculate the Tip value of individual...
3.show the share value..
4.Reset the calculator..
5.End the program...

*/
var billValue, tipPercentage, numOfPersons, totalTips, individualTips;


function calculateTips(){

    billValue = document.getElementById('billValue').value;
    tipPercentage = document.getElementById('tipPercentage').value;
    numOfPersons = document.getElementById('numOfPersons').value;

    totalTips = billValue * tipPercentage / 100;

    individualTips = totalTips / numOfPersons;

    document.getElementById('individual-Tips').innerHTML = individualTips;

}
function reset(){
    document.getElementById('billValue').value = "";
     document.getElementById('tipPercentage').value = "";
     document.getElementById('numOfPersons').value = "";
     document.getElementById('individual-Tips').innerHTML ="";
}

var calculateButton = document.getElementById('calculate');
var resetButton = document.getElementById('reset');

calculateButton.addEventListener('click', calculateTips);
resetButton.addEventListener('click', reset);












