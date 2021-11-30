"use strict";

function generateTable(cols, rows) {
    cols = parseInt(cols);
    rows = parseInt(rows);

    //create an editable table with the given height and width
    var table = document.createElement("table");

    table.setAttribute("id", "table");
    table.setAttribute("class", "table table-striped table-bordered");
    table.setAttribute("border", "1");
    table.setAttribute("align", "center");

    //create a table row for each row in the table
    var thead = document.createElement("thead")
    var row = document.createElement("tr");

    for (var i = 0; i < cols + 1; i++) {
        var cell = document.createElement("td");

        cell.setAttribute("scope", "col")
        if (i == 0) {
            cell.innerHTML = "#";
        } else {
            cell.innerHTML = "D " + (i);
        }
        row.appendChild(cell);
        thead.appendChild(row);
    }

    var cell = document.createElement("td");
    cell.setAttribute("scope", "col")
    cell.innerHTML = "Totali";
    row.appendChild(cell);
    thead.appendChild(row);

    table.appendChild(thead);

    var tbody = document.createElement("tbody");
    for (var r = 0; r < rows; r++) {
        var row = document.createElement("tr");
        // console.log("i: ", r);
        row.setAttribute("id", "row" + r);
        //create a table cell for each column in the table
        for (var c = 0; c < cols + 2; c++) {
            var cell = document.createElement("td");
            cell.setAttribute("scope", "col");
            // console.log("c: ", c);
            if (c == 0) {
                cell.innerHTML = "UP" + parseInt(r + 1).toString();
                // console.log(cell)
                // console.log("sono nel for, up:", c)
            } else if (c == cols + 1) {
                // cell.innerHTML = "Totali";
                cell.setAttribute("id", "cell" + r + "" + c);
                cell.setAttribute("class", "cell");
                cell.innerHTML = "";
                // console.log("sono nel for, totali:", c)
            }
            else {
                // console.log("sono nell if incrimitanto:", c)
                cell.setAttribute("id", "cell" + r + "" + c);
                cell.setAttribute("class", "cell");
                cell.setAttribute("contenteditable", "true");
                cell.innerHTML = "";
                //add the cell to the row
            }
            // console.log("cella num " + c + ": ", cell);
            row.appendChild(cell);
            // console.log("row " + c + ": ", row);
        }
        //add the row to the table
        tbody.appendChild(row);
        // console.log(tbody);
    }
    table.appendChild(tbody);
    // console.log(table);
    document.getElementById("tableContainer").replaceChild(table, document.getElementById("tableContainer").childNodes[0]);
}