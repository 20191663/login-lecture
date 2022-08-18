"use Strict";

class UserStorage {
  static #users = {
    id: ["kim", "park", "choi"],
    pw: ["1234", "1q2w3e4r", "iloveyou"],
    name: ["김과장", "박차장", "최부장"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
