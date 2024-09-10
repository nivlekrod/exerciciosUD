function mult(a, b, cb) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("Error");
    } else {
      const result = a * b;
      resolve(result);
    }
  })
    .then((result) => {
      cb(result);
      return result;
    })
    .catch((error) => {
      console.error(error);
    });
}

function add(a, b, cb) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("Error");
    } else {
      const result = a + b;
      resolve(result);
    }
  })
    .then((result) => {
      cb(result);
      return result;
    })
    .catch((error) => {
      console.error(error);
    });
}

function exibir(result) {
  console.log(`O resultado é: ${result}`);
}

mult(5, 5, exibir);
add(3, 2, exibir);
