function checkProbabilityTheory(count) {
         var evenCount = 0; 
        var oddCount = 0;  

  for (var i = 0; i < count; i++) {
   
    var randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    
    if (randomNumber % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  

 
  console.log("Кількість згенерованих чисел: " + count);
  console.log("Парних чисел: " + evenCount);
  console.log("Непарних чисел: " + oddCount);
  
}