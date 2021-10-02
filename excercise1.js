exerciseOne([a, a, a, b, b, v, g, g, s]);
// [[a, 3], [b, 2], [v, 1], [g, 2], [s, 1]];

function exerciseOne(List lista){
	var actual;         
	var counter = 0;
	resultList = [];
 
	for (x = 0, x < lista.size, x++) {
		if (actual == null) {
			actual = lista[x];
			counter = counter+1; 	
		} else if (actual == lista[x]) {
			counter = counter+1;
		} else (actual != lista[x]) ;{
			resultList.add([actual, counter])
			actual = lista[x];
			counter = 1;
		}
	}
	resultList.add([actual, counter]);

	return resultList;
}