const fetch = require("node-fetch");

const url = "https://public-api.tracker.gg/v2/apex/standard";

class Client {
  constructor(key) {
    this.headers = { headers: { "TRN-Api-Key": key } };
    this.allowedPlatform = ["origin", "xbl", "psn"];
  }

  user(username, platform) {
    return new Promise((resolve, reject) => {
      if (!username) return reject(new Error("You must provide a username."));
      if (!platform) return reject(new Error("You must provide a platform."));

      if (typeof username !== "string")
        return reject(
          new TypeError(
            `Username expects a string, ${typeof username} supplied.`
          )
        );
      if (typeof platform !== "string")
        return reject(
          new TypeError(
            `Platform expects a string, ${typeof platform} supplied`
          )
        );

      if (this.allowedPlatform.indexOf(platform) == undefined)
        return reject(new TypeError(`Platforms must be origin, xbl or psn`));

      fetch(`${url}/profile/${platform}/${username}`, this.headers)
        .then(res => res.json())
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error.toString());
        });
    });
  }

  search(platform, query) {
    return new Promise((resolve, reject) => {
      if (!platform) return reject(new Error("You must provide a platform."));
      if (!query) return reject(new Error("You must provide a search term."));

      if (typeof platform !== "string")
        return reject(
          new TypeError(
            `Platform expects a string, ${typeof platform} supplied`
          )
        );
      if (typeof query !== "string")
        return reject(
          new TypeError(`Query expects a string, ${typeof query} supplied.`)
        );

      if (this.allowedPlatform.indexOf(platform) == undefined)
        return reject(new TypeError(`Platforms must be origin, xbl or psn`));

      fetch(`${url}/search?platform=${platform}&query=${query}`, this.headers)
        .then(res => res.json())
        .then(response => resolve(response))
        .catch(error => {
          reject(error.toString());
        });
    });
  }
}

module.exports = Client;
