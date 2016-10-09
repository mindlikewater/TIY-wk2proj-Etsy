/*
Write out the function the long way for my understanding.
function getPrices (items) {
  var pricesArray = [];
  for (var i = 0; i < items.length; i++) {
     pricesArray.push(items[i].price);
    }
  return pricesArray;
};

Use the .map function to reduce lines of code above:
var getPrices = items.map(function (x) {
  return x.price;
});

Write out another function the long way to calculate price avg:
function avgPrice (items) {
  var average = 0;
  var newArray = getPrices(items);
  var sum = 0;
  for (var i = 0; i < newArray.length; i++) {
    sum += newArray[i];
  }
  average = sum / newArray.length;
  return average;
};
*/

function avgPrice (items) {
  var getPrices = items.map(function (x) {
    return x.price;
  });
  var sum = getPrices.reduce(function (currTotal, item) {
    return currTotal + item;
  });
  var average = sum / pricesArray.length;
  return average;
};

function 
