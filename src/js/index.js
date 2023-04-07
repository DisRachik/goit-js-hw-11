import { Notify } from 'notiflix';
import fetchPixabayApi from './fetchQuery';
import renderToGallery from './markupGallery';

import { formEl, gallery, btnMore } from './refs';
import { optionsNotiflix, optionsNotiflixFinish } from './libraryOptions';

let inputValue = null;
let resultPage = 1;
let totalPages = 1;

hideShowMoreBtn();

const onSubmit = e => {
  e.preventDefault();

  inputValue = e.target.elements.searchQuery.value.trim().toLowerCase();
  if (!inputValue) {
    Notify.failure('Enter a photo of what you want to find', optionsNotiflix);
    return;
  }

  fetchPixabayApi(inputValue)
    .then(({ totalHits, hits }) => {
      gallery.innerHTML = '';
      window.scrollTo({ top: 0 });

      if (!totalHits) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }

      renderToGallery(hits);
      foundTotalIMG(totalHits);

      totalPages = Math.ceil(totalHits / hits.length);
      if (resultPage !== totalPages) {
        addShowMoreBtn();
      } else {
        showAllImg();
      }
    })
    .catch(err => Notify.warning(err.message, optionsNotiflix));

  e.target.reset();
  resultPage = 1;
};

const onShowMoreBtn = () => {
  resultPage += 1;

  fetchPixabayApi(inputValue, resultPage).then(({ hits }) => {
    renderToGallery(hits);

    if (resultPage === totalPages) {
      hideShowMoreBtn();
      showAllImg();
    }
  });
};

formEl.addEventListener('submit', onSubmit);
btnMore.addEventListener('click', onShowMoreBtn);

function hideShowMoreBtn() {
  btnMore.style.display = 'none';
}
function addShowMoreBtn() {
  btnMore.removeAttribute('style');
}

function foundTotalIMG(totalHits) {
  Notify.info(`Hooray! We found ${totalHits} images.`, optionsNotiflix);
}

function showAllImg() {
  Notify.success(
    "We're sorry, but you've reached the end of search results.",
    optionsNotiflixFinish
  );
}
