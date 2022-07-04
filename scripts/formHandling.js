'use strict';

const form = document.getElementById("contact-form"); 
const userName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

const sendMail = (mail) => {
  fetch("/send", {
    method: "post",
    body: mail,

  }).then((response) => {
    return response.json();
  });
};

const formEvent = submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  let mail = {
    name: userName,
    email: email,
    phone: phone,
    message: message
  }

  sendMail(mail);
})