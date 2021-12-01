"use strict";

var test = [
    ["290", "250", "280", "200", "285", "315", "375"],
    ["295", "220", "375", "235", "200", "260", "560"],
    ["138", "155", "176", "165", "146", "155", "935"]
]

function nordovest() { //table
    generateTable(document.getElementById('numOfCol').value, document.getElementById('numOfRow').value);
    var table = getTableData();

    var cost = 0;
    var costs = [];
    var cols = table[0].length;
    var rows = table.length;
    var stop = false;

    var i = 0;
    var j = 0;

    // while (!stop) {

    // }

    for (var c = 0; c < cols - 1; c++) {
        for (var r = 0; r < rows - 1; r++) {
            console.log("rc:", table[r][c]);
            console.log("finale:", table[r][cols - 1]);
            // console.log(table[r][cols - 1]);
            console.log("moltiplicazione:", table[r][c] * table[r][cols - 1]);
        }
    }
}