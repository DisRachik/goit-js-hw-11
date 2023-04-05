export default function renderToGallery() {
  return `<div class="photo-card">
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <svg class="photo-card__icon" width="30" height="30" aria-label="">
        <use href="${pathToIcon('like')}"></use>
      </svg>
    </p>
    <p class="info-item">
      <svg class="photo-card__icon" width="30" height="30" aria-label="">
        <use href="${pathToIcon('view')}"></use>
      </svg>
    </p>
    <p class="info-item">
      <svg class="photo-card__icon" width="30" height="30" aria-label="">
        <use href="${pathToIcon('comment')}"></use>
      </svg>
    </p>
    <p class="info-item">
      <svg class="photo-card__icon" width="30" height="30" aria-label="">
        <use href="${pathToIcon('download')}"></use>
      </svg>
    </p>
  </div>
</div>`;
}

console.log(renderToGallery());

function pathToIcon(icon) {
  const path = new URL('../images/symbol-defs.svg', import.meta.url);

  // path.search = '';
  path.hash = `#${icon}`;
  return path.toString();
}
