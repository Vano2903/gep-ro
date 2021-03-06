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
                // } else if (c == cols + 1) {
                //     cell.setAttribute("id", "cell" + r + "" + c);
                //     cell.setAttribute("class", "cell");
                //     cell.setAttribute("contenteditable", "true");
                //     cell.innerHTML = "";
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
        cell.setAttribute("id", "cell" + parseInt(rows + 1).toString() + "" + c);
        if (c == 0) {
            cell.innerHTML = "Totali";
        } else {
            cell.innerHTML = "";
            cell.setAttribute("contenteditable", "true");
        }
        row.appendChild(cell);
    }
    tbody.appendChild(row);
    table.appendChild(tbody);
    document.getElementById("tableContainer").replaceChild(table, document.getElementById("tableContainer").childNodes[0]);

    if (document.getElementById("randomValues").checked) {
        randomNumbers(cols, rows);
    }

    document.getElementById("start").disabled = false;
}

function randomNumbers(cols, rows) {
    var min = $("#slider-range").slider("values", 0);
    var max = $("#slider-range").slider("values", 1);

    var total = 0;
    for (var c = 1; c < cols + 2; c++) {
        for (var r = 0; r < rows; r++) {
            var cell = document.getElementById("cell" + r + "" + c);
            var number = Math.floor(Math.random() * (max - min + 1)) + min;
            var number = number - (number % 5);
            cell.innerHTML = number;
            if (c == cols + 1) {
                total += number;
            }
        }
    }

    var final = 0;
    var base = Math.floor(total / parseInt(cols));
    var rand;
    for (var c = 0; c < cols + 1; c++) {
        if (c == cols) {
            var remove = total - final;
            var cella = rand + remove;

            if (cella < 0) {
                var sumOfTotals = 0;
                var lastNode = document.getElementById("cell" + (rows - 1) + "" + (cols + 1));
                if (rows > 1) {
                    for (var r = 0; r < rows - 1; r++) {
                        var cell = document.getElementById("cell" + r + "" + (cols + 1));
                        sumOfTotals += parseInt(cell.innerHTML);
                    }
                    lastNode.innerHTML = final - sumOfTotals;
                } else {
                    var cell = document.getElementById("cell" + (rows - 1) + "" + (cols + 1)).innerHTML = final;
                }
                cella = 100;
                document.getElementById("cell" + parseInt(rows + 1).toString() + "" + parseInt(cols + 1).toString()).innerHTML = final;
                return;
            }

            document.getElementById("cell" + (rows + 1) + "" + (c)).innerHTML = cella; //base + (total - final)
        } else {
            rand = Math.floor(Math.random() * (50));
            final += base + rand;
            // console.log("cella numbero: ", c, " cell" + (rows + 1) + "" + (c + 1))
            document.getElementById("cell" + (rows + 1) + "" + (c + 1)).innerHTML = base + rand;
            rand = base + rand;
        }
    }
    document.getElementById("cell" + parseInt(rows + 1).toString() + "" + parseInt(cols + 1).toString()).innerHTML = total;
}

function getTableData() {
    var table = document.getElementById("table");
    var rows = table.rows.length;
    var cols = table.rows[0].cells.length;
    var data = [];
    for (var r = 1; r < rows; r++) {
        var row = [];
        for (var c = 1; c < cols; c++) {
            row.push(table.rows[r].cells[c].innerHTML);
        }
        data.push(row);
    }
    return data;
}

function printFinalReview(algo, finalReview) {
    document.getElementById("reviewContainer").style.display = "block";
    var table = document.getElementById("reviewTable-" + algo);
    table.innerHTML = "";
    var row = document.createElement("tr");

    var cell = document.createElement("td");
    cell.innerHTML = "Quantit??";
    row.appendChild(cell);

    var cell = document.createElement("td");
    cell.innerHTML = "Movimento da => a";
    row.appendChild(cell);

    var cell = document.createElement("td");
    cell.innerHTML = "Costo";
    row.appendChild(cell);

    table.appendChild(row);

    var finalCost = 0;
    var finalQuantity = 0;
    finalReview.forEach(function (key, element) {
        var row = document.createElement("tr");

        var cell = document.createElement("td");
        cell.innerHTML = key.quantity;
        finalQuantity += parseInt(key.quantity);
        row.appendChild(cell);

        var cell = document.createElement("td");
        cell.innerHTML = key.movement;
        row.appendChild(cell);

        var cell = document.createElement("td");
        cell.innerHTML = key.cost;
        finalCost += parseInt(key.cost);
        row.appendChild(cell);

        table.appendChild(row);
    }
    );

    var row = document.createElement("tr");
    var cell = document.createElement("td");
    cell.innerHTML = finalQuantity;
    row.appendChild(cell);

    var cell = document.createElement("td");
    cell.innerHTML = "";
    row.appendChild(cell);

    var cell = document.createElement("td");
    cell.innerHTML = finalCost;
    row.appendChild(cell);

    table.appendChild(row);


}