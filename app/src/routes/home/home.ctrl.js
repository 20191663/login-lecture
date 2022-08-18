"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      pw = req.body.pw;
    const users = UserStorage.getUsers("id", "pw");
    const responce = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        responce.success = true;
        return res.json(responce);
      }
    }
    responce.success = false;
    responce.msg = "로그인에 실패하셨습니다.";
    return res.json(responce);
  },
};

module.exports = {
  output,
  process,
};
