const alertLogin = document.querySelectorAll('.btn')[0];
const email = document.getElementById('email');
const password = document.getElementById('senha');
const form = document.getElementById('evaluation-form');
const submitBtn = document.getElementById('submit-btn');
const checkAgree = document.getElementById('agreement');
const counter = document.getElementById('counter');
const textArea = document.getElementsByTagName('textarea')[0];

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
function agree() {
  if (checkAgree.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
checkAgree.addEventListener('click', agree);

// Counter
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
  const inputEmail = document.createElement('p');
  inputEmail.innerText = `Email: ${document.getElementById('input-email').value}`;
  form.appendChild(inputEmail);
}

function getHouse() {
  const house = document.createElement('p');
  house.innerText = `Casa: ${document.getElementById('house').value}`;
  form.appendChild(house);
}

function getFamily() {
  const family = document.createElement('p');
  family.innerText = `Família: ${document.querySelector('.family:checked').value}`;
  form.appendChild(family);
}

function getSubject() {
  const checkedSubject = document.querySelectorAll('.subject:checked');
  let subjectValue = checkedSubject[0].value;
  for (let index = 1; index < checkedSubject.length; index += 1) {
    subjectValue += `, ${checkedSubject[index].value}`;
  }
  const subject = document.createElement('p');
  subject.innerText = `Matérias: ${subjectValue}`;
  form.appendChild(subject);
}

function rating() {
  const rate = document.createElement('p');
  rate.innerText = `Avaliação: ${document.querySelector('.rate:checked').value}`;
  form.appendChild(rate);
}

function observations() {
  const obs = document.createElement('p');
  obs.innerText = `Observações: ${document.getElementById('textarea').value}`;
  form.appendChild(obs);
}

function sendInfo() {
  getName();
  getEmail();
  getHouse();
  getFamily();
  getSubject();
  rating();
  observations();
}
submitBtn.addEventListener('click', sendInfo);

function handleSubtmit(event) {
  const myEvent = event;
  myEvent.preventDefault();
}
submitBtn.addEventListener('click', handleSubtmit);

window.onload = () => {
  maxCount();
};
