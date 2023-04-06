import { gallery } from './refs';

export default function renderToGallery(dataImages) {
  const markup = dataImages

    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<div class="photo-card">
      <img src="${webformatURL}" alt="${tags}" width="300" height="200" loading="lazy" />
        <div class="info">
        <p class="info-item">
          <svg class="photo-card__icon" width="20" height="20" aria-label="">
            <use href="${pathToIcon('like')}"></use>
            </svg>
            ${likes}
        </p>
        <p class="info-item">
          <svg class="photo-card__icon" width="20" height="20" aria-label="">
            <use href="${pathToIcon('view')}"></use>
            </svg>
            ${views}
        </p>
        <p class="info-item">
          <svg class="photo-card__icon" width="20" height="20" aria-label="">
            <use href="${pathToIcon('comment')}"></use>
          </svg>
          ${comments}
        </p>
        <p class="info-item">
          <svg class="photo-card__icon" width="20" height="20" aria-label="">
            <use href="${pathToIcon('download')}"></use>
          </svg>
          ${downloads}
        </p>
      </div>
    </div>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}

// console.log(renderToGallery());

function pathToIcon(icon) {
  const path = new URL('../images/symbol-defs.svg', import.meta.url);

  // path.search = '';
  path.hash = `#${icon}`;
  return path.toString();
}
