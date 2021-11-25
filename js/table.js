function generateTable(cols, rows) {
    cols = parseInt(cols);
    rows = parseInt(rows);

    //create an editable table with the given height and width
    var table = document.createElement("table");
    table.setAttribute("id", "table");
    table.setAttribute("class", "table");
    table.setAttribute("border", "1");
    table.setAttribute("align", "center");

    //create a table row for each row in the table
    var thead = document.createElement("thead")
    var row = document.createElement("tr");

    for (var i = 0; i < cols + 1; i++) {
        var cell = document.createElement("td");

        console.log("sono nel for del head:", i)
        cell.setAttribute("scope", "col")
        if (i == 0) {
            cell.innerHTML = "#";
        } else {
            cell.innerHTML = "D " + (i);
        }
        row.appendChild(cell);
        console.log(row);
        thead.appendChild(row);
    }
    var cell = document.createElement("td");


    console.log("fine for")
    cell.setAttribute("scope", "col")
    cell.innerHTML = "Totali";
    row.appendChild(cell);
    thead.appendChild(row);
    table.appendChild(thead);
    console.log("sono qui")

    // var tbody = document.createElement("tbody");
    // for (var i = 0; i < cols + 2; i++) {
    //     row.setAttribute("id", "row" + i);
    //     row.setAttribute("class", "row");
    //     //create a table cell for each column in the table
    //     for (var j = 0; j < rows + 2; j++) {
    //         if (j == 0) {
    //             cell.innerHTML = "UP" + j;
    //         } else if (j == rows + 2) {
    //             cell.innerHTML = "Totali";
    //         } else {
    //             cell.setAttribute("id", "cell" + i + j);
    //             cell.setAttribute("class", "cell");
    //             cell.setAttribute("contenteditable", "true");
    //             cell.innerHTML = "";
    //             //add the cell to the row
    //             row.appendChild(cell);
    //         }
    //     }
    //     //add the row to the table
    //     tbody.appendChild(row);
    // }
    // table.appendChild(tbody);
    document.getElementById("tableContainer").appendChild(table);
}