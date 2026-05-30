function insert_Row() {

	let table = document.getElementById("sampleTable");

	// insert a new row at the top (index 0)
	let row = table.insertRow(0);

	// insert two cells
	let cell1 = row.insertCell(0);
	let cell2 = row.insertCell(1);
  
	cell1.innerHTML = "New Cell1";
	cell2.innerHTML = "New Cell2";
}
