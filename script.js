const gallery = document.getElementById('gallery');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightboxContent');
const lightboxClose = document.getElementById('lightboxClose');

const typeLabels = {
  image: 'تصویر',
  video: 'فیلم',
  audio: 'آهنگ'
};

function audioBars() {
  let bars = '';
  const heights = [40, 70, 30, 90, 50, 65, 35];
  heights.forEach(h => {
    bars += `<span style="height:${h}%"></span>`;
  });
  return `<div class="audio-face">${bars}</div>`;
}

function renderMediaPreview(item) {
  if (item.type === 'image') {
    return `<img src="${item.src}" alt="${item.title}" loading="lazy">`;
  }
  if (item.type === 'video') {
    return `<video src="${item.src}" muted preload="metadata"></video>`;
  }
  return audioBars();
}

function renderCard(item) {
  const tags = (item.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
  return `
    <article class="card" data-type="${item.type}" data-id="${item.id}">
      <div class="card-media">
        ${renderMediaPreview(item)}
        <span class="type-badge">${typeLabels[item.type] || item.type}</span>
      </div>
      <div class="card-body">
        <h3>${item.title}</h3>
        <p>${item.description || ''}</p>
        <div class="card-meta">
          <div class="tags">${tags}</div>
          <span>${item.date || ''}</span>
        </div>
      </div>
    </article>
  `;
}

function renderGallery(items) {
  if (!items.length) {
    gallery.innerHTML = `<div class="empty-state">هنوز موردی در این دسته اضافه نشده است.</div>`;
    return;
  }
  gallery.innerHTML = items.map(renderCard).join('');

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => openLightbox(card.dataset.id));
  });
}

function openLightbox(id) {
  const item = PORTFOLIO_ITEMS.find(i => String(i.id) === String(id));
  if (!item) return;

  let mediaHtml = '';
  if (item.type === 'image') {
    mediaHtml = `<img src="${item.src}" alt="${item.title}">`;
  } else if (item.type === 'video') {
    mediaHtml = `<video src="${item.src}" controls autoplay></video>`;
  } else if (item.type === 'audio') {
    mediaHtml = `<div style="padding:30px 22px 0;"><audio src="${item.src}" controls autoplay style="width:100%"></audio></div>`;
  }

  const tags = (item.tags || []).map(t => `<span class="tag">${t}</span>`).join('');

  lightboxContent.innerHTML = `
    ${mediaHtml}
    <div class="lightbox-body">
      <h3>${item.title}</h3>
      <p>${item.description || ''}</p>
      <div class="card-meta">
        <div class="tags">${tags}</div>
        <span>${item.date || ''}</span>
      </div>
    </div>
  `;
  lightbox.classList.add('open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxContent.innerHTML = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    const filtered = filter === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter(i => i.type === filter);
    renderGallery(filtered);
  });
});

renderGallery(PORTFOLIO_ITEMS);
