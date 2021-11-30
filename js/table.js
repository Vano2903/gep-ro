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
            cell.innerHTML = "D" + (i);
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
        row.setAttribute("id", "row" + r);
        //create a table cell for each column in the table
        for (var c = 0; c < cols + 2; c++) {
            var cell = document.createElement("td");
            cell.setAttribute("scope", "col");
            if (c == 0) {
                cell.innerHTML = "UP" + parseInt(r + 1).toString();
            } else if (c == cols + 1) {
                cell.setAttribute("id", "cell" + r + "" + c);
                cell.setAttribute("class", "cell");
                cell.innerHTML = "";
            }
            else {
                cell.setAttribute("id", "cell" + r + "" + c);
                cell.setAttribute("class", "cell");
                cell.setAttribute("contenteditable", "true");
                cell.innerHTML = "";
                //add the cell to the row
            }
            row.appendChild(cell);
        }
        //add the row to the table
        tbody.appendChild(row);
    }

    var row = document.createElement("tr");
    for (var c = 0; c < cols + 2; c++) {
        var cell = document.createElement("td");
        cell.setAttribute("scope", "col");
        if (c == 0) {
            cell.innerHTML = "Totali";
            cell.setAttribute("scope", "col")
        } else {
            cell.innerHTML = "";
            cell.setAttribute("scope", "col")
        }
        row.appendChild(cell);
    }
    tbody.appendChild(row);
    table.appendChild(tbody);
    document.getElementById("tableContainer").replaceChild(table, document.getElementById("tableContainer").childNodes[0]);
}

function randomNumbers(cols, rows) {
    //min = $("#slider-range").slider("values",0);
    //max = $("#slider-range").slider("values",1);
}