var rows = prompt("Ile poziomów ma mieć choinka?");

function drawTree(rows) {
	for ( var i = 0 ; i < rows ; i++) {
		var star = "";
		for ( var j = 0 ; j <= i ; j++) {
			star += "* ";
		}
		console.log(star);
	}
}


