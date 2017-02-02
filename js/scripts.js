
function rysujChoinke(l) {
	
	for (var i = 1;  i <= l; i++) {
		var star = "";
		var space = "";
		//console.log("i= ");
		for (var k = 0; k < (i * 2 - 1); k++ ) {
			star += "*";
		}
		for (var j = 0; j < (l - i); j++ ) {
			space += " ";
		}
		
		console.log(space + star);
	}
}

var poziom = prompt("Ile poziomów będzie miala choinka", poziom);
rysujChoinke(poziom);

