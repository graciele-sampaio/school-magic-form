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

// Agree and submit
const submitBtn = document.getElementById('submit-btn');
const checkAgree = document.getElementById('agreement');

function agree() {
  if (checkAgree.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disable = true;
  }
}
checkAgree.addEventListener('click', agree);

// Counter
const counter = document.getElementById('counter');
const textArea = document.getElementsByTagName('textarea')[0];

function maxCount() {
  counter.innerText = 500 - textArea.value.length;
}
textArea.addEventListener('keyup', maxCount);

window.onload = () => {
  maxCount();
};
