const numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];
function runScript(){
    // 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method
    // Using a for loop:
    var result1a = [];
    for (var i = 0; i<numbers.length; i++){
        const character = String.fromCharCode(numbers[i]);
        result1a.push(character);
    }

    document.getElementById("1a").innerHTML += " " + result1a.join(", ");
    // Using the forEach method:
    // Using the map method:
    
    // 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method
    // Answer:
    
    // 3. Display the product of all numbers using reduce
    // Answer:
}
