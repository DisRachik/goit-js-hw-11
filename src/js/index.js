import { Notify } from 'notiflix';
import fetchPixabayApi from './fetch_query';

refs = {
  formEl: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  inputEl: document.querySelector('.form [name="searchQuery"]'),
};

const onWhatToSearch = e => {
  console.log(e.target.value);
};

const onPressBtn = e => {
  e.preventDefault();
};

refs.formEl.addEventListener('input', onWhatToSearch);
refs.formEl.addEventListener('submit', onPressBtn);

console.log(refs.inputEl);

const data = fetchPixabayApi('car');

console.log(data);
