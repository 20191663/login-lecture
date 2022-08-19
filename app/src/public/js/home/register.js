"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  pw = document.querySelector("#pw"),
  confirmPw = document.querySelector("#confirm-pw"),
  registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", register);
function register() {
  if (!id.value) return alert("아이디를 입력해주세요.");
  if (!name.value) return alert("이름을 입력해주세요.");
  if (!pw.value) return alert("비밀번호를 입력해주세요.");
  if (pw.value !== confirmPw.value) {
    return alert("비밀번호가 확인란과 다릅니다.");
  }

  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
    confirmPw: confirmPw.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입 에러"));
    });
}
