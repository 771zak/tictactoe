var turn = "X";
var playedCell = [];
var playedTime = 0;

let Xcounter = 0;
let Ocounter = 0;

let x = document.getElementById("playerXCounter");
let o = document.getElementById("playerOCounter");

let modeBtn = document.getElementById("modeBtn");
let mode = false;

// create elements <table> and a <tbody>
var tbl = document.createElement("table");

var tblBody = document.createElement("tbody");

// cells creation
var identifier = 0;
for (var j = 0; j <= 2; j++) {
	// table row creation
	var row = document.createElement("tr");

	for (var i = 0; i <= 2; i++) {
		var cell = document.createElement("td");

		row.appendChild(cell);

		cell.setAttribute("width", 120);
		cell.setAttribute("height", 120);
		cell.setAttribute("class", "cell");
		cell.setAttribute("align", "center");
		cell.setAttribute("valign", "center");
		cell.addEventListener("click", playTurn);
		cell.identifier = identifier;
		cell.classList.add("cell");
		identifier = identifier + 1;

		cell.style.fontSize = "xxx-large";
		cell.style.backgroundColor = "grey";
	}

	//row added to end of table body
	tblBody.appendChild(row);
}

// append the <tbody> inside the <table>
tbl.appendChild(tblBody);
// put <table> in the <body>

document.getElementById("tictactoe").appendChild(tbl);

function playTurn() {
	//1 check if the cell has been played before
	if (this.innerHTML === "X" || this.innerHTML === "O") {
		return;
	}

	playedTime = playedTime + 1;
	//2 add the new played turn to the table playedCell
	console.log(this.identifier);
	playedCell[this.identifier] = turn;
	this.innerHTML = turn;

	//3 check if the game has been won by one of the players
	if (hasWon(turn)) {
		if (turn == "X") {
			Xcounter += 1;
			x.innerHTML = `X: ${Xcounter}`; //template litrals
			alert("Player: " + turn + " has won the game");
		} else if (turn == "O") {
			Ocounter += 1;
			o.innerHTML = `O: ${Ocounter}`;
			alert("Player: " + turn + " has won the game");
		}
		init();
	}

	if (turn === "X") {
		turn = "O";
		random();
	} else turn = "X";

	if (playedTime === 9) {
		alert("Draw game");
		init();
	}
}

function hasWon(play) {
	if (
		playedCell[0] === play &&
		playedCell[1] === play &&
		playedCell[2] === play
	)
		return true;

	if (
		playedCell[3] === play &&
		playedCell[4] === play &&
		playedCell[5] === play
	)
		return true;

	return false;
}

modeBtn.addEventListener("click", () => {
	mode = !mode;
	modeBtn.innerText = mode ? "Normal mode" : "Automatic mode";
	init();
});

function init() {
	playedTime = 0;
	turn = "X";
	playedCell = [];
	var allCells = document.getElementsByClassName("cell");
	for (let item of allCells) {
		item.innerHTML = "";
	}
}
