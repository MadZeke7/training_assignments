var myFirstVar = "Hello Fren";
function sayName(_a) {
    var first = _a.first, _b = _a.last, last = _b === void 0 ? 'Smith' : _b;
    var name = first + ' ' + last;
    console.log(name);
}
console.log(myFirstVar);
sayName({ first: 'Evin', last: 'Renji' });
