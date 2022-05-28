'use strict';

const form = document.getElementById("contact-form"); 

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

    let mail = new FormData(form);

    sendMail(mail);
})
