import throttle from 'lodash.throttle';
import '../css/03-feedback.css';
import '../css/common.css';
const STORAGE_KEY = 'feedback-form-state';
const getStoreg = JSON.parse(localStorage.getItem(STORAGE_KEY));
const formData = getStoreg  || {};  
const refs = {
  form: document.querySelector('.feedback-form'),
// textarea: document.querySelector('.feedback-form textarea'),
//    input: document.querySelector('.feedback-form input'),
};



refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(storageValue), 500);
saveLocalStorage();

function storageValue(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function saveLocalStorage(e) {
  if (getStoreg) {
    for (const key of Object.keys(getStoreg)) {
      if (getStoreg[key]) {
        refs.form.elements[key].value = getStoreg[key];
      };
    }
  }
}


function onFormSubmit(e) {
  e.preventDefault();
  for (const key of e.currentTarget.elements) {
    if (key.type !== 'submit'&& key.value == '') {
      return alert('Please fill in all the fields!');
    }
  }
console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  
}
