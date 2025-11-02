function pow(x, y) { 
    var result = 1; 

    for (var i = 0; i < y; i++) {
    result = result * x;  
    console.log(': результат ' + (i + 1) + '= ' + result); 
} 

return result; 

}

console.log('Результат:', pow(2, 3)); 