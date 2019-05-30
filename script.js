const numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];

function run() {
  // 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method
  // Using a for loop:
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
    document.getElementById('forloop').innerHTML += " " + String.fromCharCode(numbers[i])
  }

  // Using the forEach method:
  numbers.forEach(element => {
    document.getElementById('foreach').innerHTML += " " + String.fromCharCode(element)
  })

  // Using the map method:
  const characterArr = numbers.map(element => {
    return String.fromCharCode(element);
  })
  document.getElementById('map').innerHTML += " " + characterArr.join(" ")


  // 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method
  // Answer:
  const filteredArr = numbers.filter(element => {
    return element > 72 && element <= 88
  })
  console.log(filteredArr);
  document.getElementById('filter').innerHTML += " " + filteredArr.join(" ")

  // 3. Display the product of all numbers using reduce
  // Answer:
  const product = numbers.reduce((prev, curr) => {
    return prev * curr
  })

  document.getElementById('reduce').innerHTML += " " + product

}

