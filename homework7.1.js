var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";


function getNumericPrice(priceStr) {
  return parseInt(priceStr); 
}


services.price = function() {
  var total = 0;
  for (var key in this) {
    if (typeof this[key] === 'string') {
      total += getNumericPrice(this[key]);
    }
  }
  return total + " грн";
}


services.minPrice = function() {
  var min = Infinity;
  for (var key in this) {
    if (typeof this[key] === 'string') {
      var price = getNumericPrice(this[key]);
      if (price < min) {
        min = price;
      }
    }
  }
  return min + " грн";
}


services.maxPrice = function() {
  var max = -Infinity;
  for (var key in this) {
    if (typeof this[key] === 'string') {
      var price = getNumericPrice(this[key]);
      if (price > max) {
        max = price;
      }
    }
  }
  return max + " грн";
}


console.log("Загальна вартість:", services.price());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());