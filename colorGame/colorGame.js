var numSquares = 6;
var colors = [];
var colorPicked ;
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.getElementsByClassName("square");
var message = document.querySelector("#message");
var headerId = document.getElementById("headerIdNum");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
colorDisplay.textContent=colorPicked;

init();

function init(){
	setupModeButtons();
	setupButtons();
	reset();
}

function setupButtons(){
	for(var i = 0 ; i <squares.length; i++){

	//add click listener to squares
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === colorPicked){
			resetButton.textContent="Play Again ?";
			message.textContent="Great!";
			changecolor(clickedColor);
			headerId.style.backgroundColor=clickedColor;
		}

		else{

			this.style.backgroundColor = "#232323";
			message.textContent="Try Again!"
		}
	});
}
}

function setupModeButtons(){
			// mode button evetn listeners
			for(var i = 0 ; i <modeButtons.length;i++){
				modeButtons[i].addEventListener("click",function(){
					modeButtons[0].classList.remove("selected");
					modeButtons[1].classList.remove("selected");
					this.classList.add("selected");

					this.textContent === "Easy" ? numSquares=3 : numSquares=6;
					reset();
				});

			}
		}





		function reset(){
			colors = generateRandomColor(numSquares);
			colorPicked = pickColor();
			colorDisplay.textContent=colorPicked;
			resetButton.textContent="New Colors";

			console.log(colors);
	//pick new random color
	message.textContent="";

	//reflect choosen color to squares
	for(var i = 0 ; i <squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	//add initial color
}
headerId.style.backgroundColor="steelblue";
}

// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares=3;
// 	colors=generateRandomColor(numSquares);
// 	colorPicked=pickColor();
// 	colorDisplay.textContent=colorPicked;
// 	for(var i = 0 ; i <squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display="none";
// 		}
// 	}

// });

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors=generateRandomColor(numSquares);
// 	colorPicked=pickColor();
// 	colorDisplay.textContent=colorPicked;
// 	for(var i = 0 ; i <squares.length;i++){
// 		squares[i].style.backgroundColor = colors[i];		

// 		squares[i].style.display="block";

// 	}

// });

resetButton.addEventListener("click",function(){

	reset();	
// 	// generate new colors
// 	numSquares =6;
// 	colors = generateRandomColor(numSquares);
// 	console.log(colors);
// //pick new random color
// message.textContent="";
// this.textContent="New Colors";
// colorPicked = pickColor();
// colorDisplay.textContent=colorPicked;


// //reflect choosen color to squares
// for(var i = 0 ; i <squares.length; i++){
// 	//add initial color
// 	squares[i].style.backgroundColor = colors[i];

// }
// headerId.style.backgroundColor="steelblue";

});




function changecolor(color){
	for(var i = 0 ; i <squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	console.log(random);
	return colors[random];
}

function generateRandomColor(num){
	var arr =[];

	for(var i = 0 ; i < num ; i ++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	// red 0 - 255
	var r = Math.floor(Math.random() * 256);
	//green 0-255
	var g = Math.floor(Math.random() * 256);

	//blue 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r +", " + g + ", " + b + ")";

}

function generateNewColors(){
	buttonId.addEventListener("click",function(){
		var newGenearated = generateRandomColor(6);
		for(var i = 0 ; i <squares.length; i++){
	//add initial color
	squares[i].style.backgroundColor = colors[i];
}

});
}