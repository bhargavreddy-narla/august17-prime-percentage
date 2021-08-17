"use strict";

function primeNumber() {
  var num = document.getElementById("number").value;
  var isprime;
  for (var i = 2; i <= 13; i++) {
    isprime = 1;

    for (var j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        isprime = 0;
        break;
      }
    }
    if (isprime == 1) {
      document.write(i + ",");
    }
  }
}
