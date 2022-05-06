<<<<<<< HEAD
function loginTryber () {
let email = document.getElementById("email");
let senha = document.getElementById("senha");
let alertLogin = document.querySelector(".btn");
alertLogin.addEventListener(click, "loginTryber");
=======
console.log('Olá, mundo!');
>>>>>>> ac3d00de56767af10b99e35a5c93c45f02ba4120

const alertLogin = document.querySelectorAll('.btn')[0];
const email = document.getElementById('email');
const password = document.getElementById('senha');

// Alert
function loginTryber() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
alertLogin.addEventListener('click', loginTryber);
