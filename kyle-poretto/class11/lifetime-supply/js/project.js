//variables for interactive elements
var age = document.getElementsById(‘#age’);
var max_age = document.getElementsById(‘#max-age’);
var drink_item = document.getElementsById(‘#item’);
var num_per_day = document.getElementsById(‘#num-per-day’);
var click_me = document.getElementsById(‘#click-me’);
var solution = document.getElementsById(‘#solution’);
var drink = document.getElementsById(‘#drink’);

//variables for chunks of data

var myAge;
var myMaxAge;
var myItem;
var mySolution;
var myDrink;
var myNumPerDay;

//set up trigger

click_me.onclick = function () {
	myAge = age.value;
	myMaxAge = max_age.value;
	myItem = item.value;
	mySolution = (myMaxAge - myAge) * 365 * myNumPerDay;
	myDrink = item.value;
	solution.innerhtml = mySolution;
	drink.innerhtml = myDrink;

document.getElementsById('click-me').onclick = calculate;

function calculate (){
	var age = parseInt(document.getElementsById('age').value);
	var max_age = parseInt(document.getElementsById('max-age').value);

	var mySolution = (max_age - age) * myNumPerDay *365;

	document.getElementsById('#solution').innerhtml = mysolution;
	document.getElementsById('drink').innerhtml = item;
}
