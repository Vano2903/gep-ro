"use strict";

function getMin(table) {
    var min = [];
    min.push({ "r": 0, "c": 0, "val": table[0][0] });

    for (var i = 0; i < table.length - 1; i++) {
        for (var j = 0; j < table[i].length - 1; j++) {
            if (table[i][j] <= min[0].val) {
                if (table[i][j] == min[0].val) {
                    min.push({ "r": i, "c": j, "val": table[i][j] });
                } else {
                    var clean = [{ "r": i, "c": j, "val": table[i][j] }];
                    min = clean;
                }
            }
        }
    }
    return min;
}

function minCost() {
    // generateTable(10, 1);
    var table = getTableData();

    var rows = table.length;
    var cols = table[0].length;

    // console.log("table");
    // console.table(table);
    var stop = false;
    var shiftc = 0;
    var shiftr = 0;
    var finalReview = [];
    var costs = [];
    var cost = 0;
    var r = 0;
    var c = 0;

    while (!stop) {
        if (table.length > 1 && table[0].length > 1) {
            var min = getMin(table);
            // console.log("min");
            // console.table(min);
            var maxTransport = { "value": 0, "r": 0, "c": 0 };
            for (var i = 0; i < min.length; i++) {
                if (table[min[i].r][cols - 1 - shiftc] > maxTransport.value) {
                    maxTransport = {
                        "r": min[i].r, "c": min[i].c, "value": table[min[i].r][cols - 1 - shiftc]
                    };
                }
            }
            // console.log(maxTransport);
            var singleCost = min[0].val;
            var UpNeed = parseInt(table[maxTransport.r][cols - 1 - shiftc]);
            // var DNeed = table[maxTransport.r][col]
            var DNeed = parseInt(table[rows - 1 - shiftr][maxTransport.c]);
            // console.log("DNeed: " + DNeed);
            // console.log("UpNeed: " + UpNeed);

            if (UpNeed <= DNeed) {
                // console.log("upneed <= dneed");

                table.splice(maxTransport.r, 1);

                // for (var i = 0; i < rows - shiftr; i++) {
                //     table[maxTransport.c].shift();
                // }

                finalReview.push({ "quantity": UpNeed, "movement": "UP" + (c + 1) + " => D" + (r + 1), "cost": singleCost * UpNeed });
                r++;
                shiftr++;
                // table[0][cols - 1 - shiftc] = parseInt(table[0][cols - 1 - shiftc]) - DNeed;
                table[rows - 1 - shiftr][maxTransport.c] = parseInt(table[rows - 1 - shiftr][maxTransport.c]) - UpNeed;
                costs.push(singleCost * UpNeed);
                cost += singleCost * UpNeed;
                // console.log("quantity: ", UpNeed);
                // console.log("cost: " + singleCost * UpNeed);

            } else {
                // console.log("upneed > dneed");
                //remove a column from table
                table.forEach(function (row) {
                    row.splice(maxTransport.c, 1);
                });
                shiftc++;

                table[maxTransport.r][cols - 1 - shiftc] = parseInt(UpNeed) - parseInt(DNeed);//table[rows - 1 - shiftr][0];
                // console.log("else: ", DNeed - UpNeed);

                //remove the first row
                // table.splice(0, 1);
                finalReview.push({ "quantity": DNeed, "movement": "UP" + (c + 1) + " => D" + (r + 1), "cost": singleCost * DNeed });
                c++;
                costs.push(singleCost * DNeed);
                cost += singleCost * DNeed;
                // console.log("quantity: ", DNeed);
                // console.log("cost: " + singleCost * DNeed);
            }
            // console.table(table);
            // if (maxTransport.value > 0) {

            // table[maxTransport.r][maxTransport.c] ;
            // stop = true;
        } else {
            stop = true;
        }

    }
    // console.log("finalReview");
    // console.table(finalReview);
    printFinalReview("minCost", finalReview)
}