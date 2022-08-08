const ellipses = document.querySelector('.ellipse-container');

const img = document.getElementById('product-image');

const showRelatedImage = (e) => {
  if (e.target.classList.contains('ellipse-1')) {
    img.setAttribute('src', './images/iphone-8-gold.png');
  } else if (e.target.classList.contains('ellipse-2')) {
    img.setAttribute('src', './images/iphone-8-red.png');
  } else if (e.target.classList.contains('ellipse-3')) {
    img.setAttribute('src', './images/iphone-8-silver.png');
  } else if (e.target.classList.contains('ellipse-4')) {
    img.setAttribute('src', './images/iphone-8-black.png');
  }
};

const showDefaultImage = (e) => {
  img.setAttribute('src', './images/iphone-8-default.png');
};

ellipses.addEventListener('mouseover', showRelatedImage);

ellipses.addEventListener('mouseleave', showDefaultImage);
