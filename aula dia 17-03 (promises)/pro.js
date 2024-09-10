function multiplyNumbers(numbersArray, callbackFunction) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(numbersArray)) {
      reject(`Error: ${numbersArray} is not an array.`);
    } else {
      const multipliedNumbers = numbersArray.map((number) =>
        callbackFunction(number)
      );
      resolve(multipliedNumbers);
    }
  });
}

function multiplyByTwo(number) {
  return number * 2;
}

const numbers = [1, 2, 3, 4, 5];
multiplyNumbers(numbers, multiplyByTwo)
  .then(result => console.log(result))
  .catch(error => console.error(error));
