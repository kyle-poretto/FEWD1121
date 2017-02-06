// Program Flow
//
// 1: User clicks on #clickme (this element)
// 2: Increment the value of #click-num by one for each click (eg if clicknum is 0, make it 1; it clicknum is 10, make it 11; etc.)
//
var signups = 0;

$(document).ready(function () {
	var signups = $('button').click(function)(){
		signups ++;

		$('submit-num').html('signups');

});
