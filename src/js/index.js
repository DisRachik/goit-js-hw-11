import { Notify } from 'notiflix';
import fetchPixabayApi from './fetchQuery';
import renderToGallery from './markupGallery';

import { formEl, gallery, inputEl } from './refs';

const onSubmit = e => {
  e.preventDefault();

  const inputValue = e.target.elements.searchQuery.value.trim().toLowerCase();

  fetchPixabayApi(inputValue).then(res => renderToGallery(res.hits));

  e.target.reset();
};

formEl.addEventListener('submit', onSubmit);
