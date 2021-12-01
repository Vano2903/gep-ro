"use strict";

function nordovest() { //table
    // generateTable(4, 2);
    var table = getTableData();

    console.log("table");
    console.table(table);
    var cost = 0;
    var costs = [];
    var cols = table[0].length;
    var rows = table.length;
    var stop = false;
    var shiftc = 0;
    var shiftr = 0;

    var finalReview = [];
    var r = 1;
    var c = 1;

    while (!stop) {
        if (table.length > 1 && table[0].length > 1) {
            var DNeed = parseInt(table[rows - 1 - shiftr][0]);
            var UPNeed = parseInt(table[0][cols - 1 - shiftc]);
            // console.log("shiftc: " + shiftc);
            // console.log("array position: [", 0, "][", cols - 1 - shiftc, "]")
            // console.log("c:", cols - 1 - shiftc)
            var singleCost = parseInt(table[0][0]);
            // console.log("dneed: ", DNeed);
            // console.log("upneed: ", UPNeed);
            // console.log("singlecost: ", singleCost);
            // console.log("costo:", singleCost * DNeed);


            // console.log("dneed: ", DNeed, " upneed: ", UPNeed);
            if (DNeed <= UPNeed) {
                // console.log("dneed <= upneed");
                //remove the first column
                for (var i = 0; i < rows - shiftr; i++) {
                    table[i].shift();
                }
                finalReview.push({ "quantity": DNeed, "movement": "UP" + c + " => D" + r, "cost": singleCost * DNeed });
                shiftc++;
                table[0][cols - 1 - shiftc] = parseInt(table[0][cols - 1 - shiftc]) - DNeed;
                r++;
                costs.push(singleCost * DNeed);
                cost += singleCost * DNeed;
                // console.log("cost: ", singleCost * DNeed);
            } else {
                // console.log("dneed > upneed");
                table[rows - 1 - shiftr][0] = DNeed - UPNeed;//table[rows - 1 - shiftr][0];
                // console.log("else: ", DNeed - UPNeed);

                //remove the first row
                table.splice(0, 1);
                shiftr++;
                finalReview.push({ "quantity": UPNeed, "movement": "UP" + c + " => D" + r, "cost": singleCost * UPNeed });
                c++;
                costs.push(singleCost * UPNeed);
                cost += singleCost * UPNeed;
                // console.log("cost: ", singleCost * UPNeed);
            }
            // console.log(costs)
            // console.table(table)
        } else {
            stop = true;
        }
    }


    console.log("finalReview: ", finalReview);
    console.log("finito");

    printFinalReview("NoOv", finalReview);
}

