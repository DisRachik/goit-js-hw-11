import { Notify } from 'notiflix';
import fetchPixabayApi from './fetchQuery';
import renderToGallery from './markupGallery';

import { formEl, gallery, inputEl, btnMore } from './refs';
import { optionsNotiflix } from './libraryOptions';

let inputValue = null;
let searchResultPage = 1;

const onSubmit = e => {
  e.preventDefault();

  // if (inputValue === e.target.elements.searchQuery.value.trim().toLowerCase()) {
  //   searchResultPage += 1;
  //   fetchPixabayApi(inputValue, searchResultPage).then(({ hits }) =>
  //     renderToGallery(hits)
  //   );
  //   return;
  // }

  inputValue = e.target.elements.searchQuery.value.trim().toLowerCase();

  fetchPixabayApi(inputValue)
    .then(({ total, hits }) => {
      gallery.innerHTML = '';
      window.scrollTo({ top: 0 });

      if (!total) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      renderToGallery(hits);
    })
    .catch(err => Notify.warning(err.message, optionsNotiflix));

  e.target.reset();
  searchResultPage = 1;
};

const onShowMoreBtn = () => {
  searchResultPage += 1;
  fetchPixabayApi(inputValue, searchResultPage).then(({ hits }) =>
    renderToGallery(hits)
  );
};

formEl.addEventListener('submit', onSubmit);
btnMore.addEventListener('click', onShowMoreBtn);

console.log(window);
