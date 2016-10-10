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

//1.
function avgPrice (items) {
  var getPrices = items.map(function (items) {
    return Number(items.price);
  });
  var sum = getPrices.reduce(function (total, nextPrice) {
    return total + nextPrice;
  });
  var average = sum / getPrices.length;
  var answer1 = document.getElementById("answer1");
  answer1.innerHTML = "The average price is: $" + average.toFixed(2);
};

//2.
function getItemsInRange (items) {
  var list = [];
  for (var i = 0; i < items.length; i++) {
      var itemNow = items[i];
      if (itemNow.price > 14 && itemNow.price < 18) {
        list.push(itemNow.title);
      }
  }
  var answer2 = document.getElementById("answer2");
  answer2.innerHTML = "Items that cost between $14-$18: " + "<br />" + list[0] + "<br />" + "<br />" + list[1] + "<br />" + "<br />" + list[2];
};

//3.
 function getGBP (items) {
   var GBPitems = [];
   for (var i = 0; i < items.length; i++) {
     var itemNow = items[i];
     if (itemNow.currency_code === "GBP") {
       var price = " &#163;" + itemNow.price;
       GBPitems.push(itemNow.title);
       GBPitems.push(price);
     }
   }
   var answer3 = document.getElementById("answer3");
   answer3.innerHTML = "Items sold in GBP currency: " + GBPitems;
 };

//4.
function madeOfWood (items) {
  var woodItems = items.filter (function (objs) {
    return objs.materials.includes("wood");
  });
  var woodList = woodItems.map(function (x) {
  return x.title;
});

  var answer4 = document.getElementById("answer4");
  answer4.innerHTML = "Items made of wood: " + "<br />" + woodList[0] + "<br />" + "<br />" + woodList[1] + "<br />" + "<br />" + woodList[2] + "<br />" + "<br />" + woodList[3] + "<br />" + "<br />" + woodList[4];
};

//5.
function manyMaterials (items) {
  var mat8plus = items.filter (function (objs) {
    return objs.materials.length >= 8;
  });
  var listItem1 = mat8plus[0].title + " has " + mat8plus[0].materials.length + " materials: " + mat8plus[0].materials;
  var listItem2 = mat8plus[1].title + " has " + mat8plus[1].materials.length + " materials: " + mat8plus[1].materials;

  var answer5 = document.getElementById("answer5");
  answer5.innerHTML = "Items with 8+ materials: " + "<br />" + listItem1 + "<br />" + "<br />" + listItem2;
};

//6.
function findHandmade (items) {
  var maker = items.map(function (x) {
    return x.who_made;
  });
  var onlyHandmade = maker.filter(function (self) {
    return self === "i_did";
    });
  var sum = onlyHandmade.length;
  var handmade = sum + " items were made by their sellers";
  var answer6 = document.getElementById("answer6");
  answer6.innerHTML = handmade;
};
