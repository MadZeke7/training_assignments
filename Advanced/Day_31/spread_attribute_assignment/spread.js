function sum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var s = 0;
    for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
        var n = arr_1[_a];
        s = s + n;
    }
    return s;
}
function max() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var max = arr[0];
    for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
        var n = arr_2[_a];
        if (max < n) {
            max = n;
        }
    }
    return max;
}
console.log("Sum of numbers 10, 20, 30 : ".concat(sum(10, 20, 30)));
console.log("Sum of numbers 10, 20, 30, 40 : ".concat(sum(10, 20, 30, 40)));
console.log("Sum of numbers 10, 20, 30, 40, 50 : ".concat(sum(10, 20, 30, 40, 50)));
console.log("------------------------------------");
console.log("Max of numbers 10, 20, 30, 40 : ".concat(max(10, 20, 30, 40)));
console.log("Max of numbers 10, 20, 30, 40, 50, 90, 80 : ".concat(max(10, 20, 30, 40, 50, 90, 80)));
