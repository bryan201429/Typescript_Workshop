var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var arr = [1, 2, 3, 4];
var arrayStrings = ['a', 'b', 'c'];
function firsElement(arr) {
    return arr[0];
}
var elemento = firsElement(arr); //implicito el declarado de tipo
var elementoString = firsElement(arrayStrings); //Explícito
//!
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
