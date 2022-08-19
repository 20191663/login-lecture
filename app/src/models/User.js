"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const body = this.body;
    const { id, pw } = await UserStorage.getUserInfo(body.id);
    if (id) {
      if (id === body.id && pw === body.pw) {
        return { success: true };
      }
      return { success: false, msg: "올바르지 않은 비밀번호입니다." };
    }
    return { success: false, msg: "아이디를 확인하세요." };
  }
  async register() {
    const body = this.body;
    try {
      const response = await UserStorage.save(body);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = User;
