'use strict';

const toggle = (social) => {
  let popup = document.getElementById('social');
  if (popup.style.display == 'flex') popup.style.display = 'none';
  else popup.style.display = 'flex';
}