function getGitHubUserData(username) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${username}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`Failed to fetch GitHub user data: ${response.status}`);
          }
        })
        .then(userData => {
          resolve({
            name: userData.name,
            bio: userData.bio
          });
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  