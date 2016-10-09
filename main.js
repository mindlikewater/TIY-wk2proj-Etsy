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
    return items.price;
  });
  var sum = getPrices.reduce(function (total, nextPrice) {
    return total + nextPrice;
  });
  var average = sum / getPrices.length;
  var answer1 = document.getElementById("answer1");
  answer1.innerHTML = "The average price is: $" + average.toFixed(2);
};

avgPrice();

//2.
function getItemsInRange (items) {
  var list = [];
  for (var i = 0; i < items.length; i++) {
      var itemNow = items[i];
      if (itemNow.price > 14 && itemNow.price < 18) {
        list.push(itemNow.title);
      }
  }
  return list;
};

/*
var getPrices = items.map(function (x) {
  return x.price;
});

var list = getPrices.filter(function (cost) {
  return cost > 18 && cost < 18;
});
*/

//3.
 function getGBP (items) {
   var newArray = [];
   for (var i = 0; i < items.length; i++) {
     var itemNow = items[i];
     if (itemNow.currency_code === "GBP") {
       var price = "£" + itemNow.price;
       newArray.push(itemNow.title);
       newArray.push(price);
     }
   }
   return newArray;
 };

//4.
/*
function madeOfWood (items) {
  var woodenItems = [];
  var itemNow = items[i];
  for (var i=0; i<items.length; i++) {
    if (itemNow.materials. )

    for (var i=0; i<itemNow.materials.length; i++) {
      if (itemNow.materials === "wood") {
        woodenItems.push(itemNow.title);
      }
    }
  }
  return woodenItems;
};

function getPrices (items) {
  var pricesArray = [];
  for (var i = 0; i < items.length; i++) {
     pricesArray.push(items[i].price);
    }
  return pricesArray;
};
/*
  var woodItems = items.map (function (x) {
    if (x.materials === "wood") {
    return x.materials;
    }
  });
  return woodItems;
};
*/

//5.
function manyMaterials (items) {
  var mat8plus = items.filter (function (objs) {
    return objs.materials.length >= 8;
  });
  var listing = mat8plus.filter (function (x) {
    return x.title + x.quantity + x.materials;
  });
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
  var answer = sum + " were made by their sellers";
  return answer;
};

/*
 for (var i = 0; i < items.length; i++) {
   if (items[i].currency_code === "GBP") {
     newArray.push("£"); items[i].price);
   }
 }
*/
