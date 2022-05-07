const alertLogin = document.querySelectorAll('.btn')[0];
const email = document.getElementById('email');
const password = document.getElementById('senha');
const form = document.getElementById('evaluation-form');

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
    submitBtn.disabled = true;
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

// Send Button
function getName() {
  const firstName = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const fullName = document.createElement('p');
  fullName.innerText = `Nome: ${firstName} ${lastName}`;
  form.appendChild(fullName);
}

function getEmail() {
  const email = document.getElementById('input-email').value;
  const formatEmail = document.createElement('p');
  formatEmail.innerText = `Email: ${email}`;
  form.appendChild(email);
}

submitBtn.addEventListener('click', getName);

function handleSubtmit(event) {
  const myEvent = event;
  myEvent.preventDefault();
}
submitBtn.addEventListener('click', handleSubtmit);

window.onload = () => {
  maxCount();
};
