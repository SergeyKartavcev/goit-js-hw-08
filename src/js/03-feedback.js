import throttle from 'lodash.throttle';
import '../css/03-feedback.css';
import '../css/common.css';
const STOREG_KEY = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem('STOREG_KEY'))||{};
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};


refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(callbekc), 500);
saveLocalStorage();

function callbekc(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('STOREG_KEY', JSON.stringify(formData));
}

function saveLocalStorage() {
  const parsData = JSON.parse(localStorage.getItem('STOREG_KEY'));
  if (parsData) {
    console.log(parsData);
    if (parsData.message) {
      refs.textarea.value = parsData.message;
    }
    if (parsData.email) {
      refs.input.value = parsData.email;
    }
  }
  console.log(parsData);
}

function onFormSubmit(e) {
  e.preventDefault();
  if (refs.textarea.value === "" || refs.input.value === "") {
    return alert('Please fill in all the fields!');
  }

  e.currentTarget.reset();
  localStorage.removeItem('STOREG_KEY');
}
