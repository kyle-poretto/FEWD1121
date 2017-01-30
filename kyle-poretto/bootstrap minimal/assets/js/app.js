// We have a form
// input first name
// on button click => 
	// Hello world changes to input value
	$(".welcome").hide();
$(document).ready(function(){
	// When everything loads 
	// these are allowed to fire

	$("#form").submit(function(e){
		e.preventDefault();
		console.log("Firing!");
		grabName();
	});

});
function grabName(){
	console.log('In grabName()');

	var name = $('#name').val();
	console.log(name);

$("#form").hide();
$(".helloWorld").hide();
$(".welcome").html("Welcome Home "+name).show();

}