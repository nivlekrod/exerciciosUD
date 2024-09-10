function soma(n1, n2) {
  return new Promise((resolve, reject) => {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      reject("Os valores informados devem ser números");
    } else {
      const result = n1 + n2;
      resolve(result);
    }
  });
}

soma(2, 3)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

soma("2", "3")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
