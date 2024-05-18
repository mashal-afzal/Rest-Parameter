function stationaryBox(pencil, pen) {
    var otheritems = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otheritems[_i - 2] = arguments[_i];
    }
    console.log(pencil, pen);
    console.log(otheritems);
}
var result = stationaryBox(5, 10, 100);
