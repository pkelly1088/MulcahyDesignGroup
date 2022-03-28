'use strict';

const submitBtn = document.querySelector('.submitBtn');

const sendMail = (mail) => {
    console.log(mail);
    // fetch("/send", {
    //     method: 'POST',
    //     body: mail,
    // }).then(response => {
    //     return response.json();
    // });
};

const formEvent = submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let mail = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value,
        message: document.querySelector('#message').value,
    };

    sendMail(mail);
})
