function exportarCsv(){
	var csv="";
	var table = document.getElementById("exportar");

	for (var i = 0, row; row = table.rows[i]; i++) {
	   for (var j = 0, col; col = row.cells[j]; j++) {
	   		csv+=row.cells[j].innerHTML+";";

	   		if(j == (row.cells.length-1)){
	   			csv+="\n";
	   		}
	   	}
	}

	document.getElementById("resultadocsv").value = csv;
}