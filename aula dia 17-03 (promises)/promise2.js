const fetchUser = (username) => {
    return fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Não foi possível obter as informações do usuário.');
        }
        return response.json();
      })
      .then((userData) => {
        return userData;
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
  
  fetchUser('octocat')
    .then((userData) => {
      console.log(userData);
    })
  