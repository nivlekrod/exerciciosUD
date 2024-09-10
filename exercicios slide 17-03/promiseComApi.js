const getUserInfo = (username) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject(new Error("Usuario não encontrado"));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
getUserInfo("nivlekrod")
  .then((user) => {
    console.log(`Nome: ${user.name}`);
    console.log(`Bio: ${user.bio}`);
  })
  .catch((error) => console.error(error));