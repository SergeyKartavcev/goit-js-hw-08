import throttle from 'lodash.throttle';
import '../css/03-feedback.css';
import '../css/common.css';
const STOREG_KEY = 'feedback-form-state';
const getStoreg = JSON.parse(localStorage.getItem('STOREG_KEY'));
const formData = getStoreg || {};
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(storageValue), 500);
saveLocalStorage();

function storageValue(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('STOREG_KEY', JSON.stringify(formData));
}

function saveLocalStorage() {
  const parsData = getStoreg;
  if (parsData) {
    for (const key in parsData) {
      if (parsData.hasOwnProperty(key)) {
        refs.textarea.value = parsData.message || '';
        refs.input.value = parsData.email || '';
      }
    }
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  if (refs.textarea.value === '' || refs.input.value === '') {
    return alert('Please fill in all the fields!');
  }

  e.currentTarget.reset();
  localStorage.removeItem('STOREG_KEY');
}
