"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StopWatch_1 = require("./src/StopWatch");
var stopWatch = new StopWatch_1.default();
stopWatch.start();
function selectionSort(arr) {
    var currentValueNewIndex;
    for (var i = 0; i < arr.length; i++) {
        currentValueNewIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[currentValueNewIndex] > arr[j]) {
                currentValueNewIndex = j;
            }
        }
        if (i !== currentValueNewIndex) {
            var temp = arr[i];
            arr[i] = arr[currentValueNewIndex];
            arr[currentValueNewIndex] = temp;
        }
    }
    return arr;
}
var arr = [];
for (var i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000 + 1));
}
console.log(selectionSort(arr));
stopWatch.stop();
var milliseconds = stopWatch.getElapsedTime();
console.log("Thoi gian thuc thi: " + milliseconds + " ms");
console.log("seconds elapsed" + milliseconds / 1000);
