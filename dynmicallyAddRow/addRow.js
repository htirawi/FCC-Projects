var counter = 1;
var limit = 3;

function addInput(divName){

	var newDiv = document.createElement('div');
	newDiv.innerHTML= "Name :" + " <input type='text' name='myinputs[]'>" + "<nbsp>" + " Age :" + " <input type='text' name='age[]'>";
	document.getElementById(divName).appendChild(newDiv);
	counter++;
}
