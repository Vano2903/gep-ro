"use strict";

function highesCosts(table) {
    var hightests = [];
    for (var c = 0; c < table.length - 1; c++) {
        var hightest = { "r": 0, "c": 0, "value": 0 };
        for (var r = 0; r < table[0].length - 1; r++) {
            console.log(table[r][c])
            if (table[r][c] > hightest.value) {
                // hightest = table[r][c];
                hightest = { "r": r, "c": c, "value": table[r][c] };
                hightests.push(hightest);
                console.log(hightest);
            }
        }
    }
    console.log(hightests);

}