"use strict";

function getMin(table) {
    var min = [];
    min.push({ "c": 0, "r": 0, "val": table[0][0] });

    for (var i = 0; i < table.length; i++) {
        for (var j = 0; j < table[i].length; j++) {
            if (table[i][j] < min) {
                if (table[i][j] == 0) {
                    min.push({ "c": i, "r": j, "val": table[i][j] });
                } else {
                    var clean = { "c": i, "r": j, "val": table[i][j] };
                    min = clean;
                }
            }
        }
    }
    return min;
}

function minCost() {
    var table = getTableData();

    console.log("table");
    console.table(table);
    var stop = false;
    while (!stop) {
        if (table.length > 1 && table[0].length > 1) {

        } else {
            stop = true;
        }

    }
}