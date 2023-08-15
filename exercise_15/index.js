var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guest2 = ['ali', 'haroon', 'adeel'];
guest2.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", I am inviting you for the Dinner"));
});
console.log("Hroon can't make it");
guest2[(__spreadArray([], guest2, true)).findIndex(function (gInd) { return gInd === 'haroon'; })] = 'daniyal';
guest2.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", I am inviting you for the Dinner"));
});
