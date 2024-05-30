export function PostCard({ id, title, image_uri, shortMessage }) {
  const $postCard = document.createElement('div');
  $postCard.classList.add('post-card');
  const $image = document.createElement('img');
  $image.alt = 'imagen...';
  $image.addEventListener('error', () => ($image.src = 'http://127.0.0.1:5501/app/assets/img/image_not_found.jpg'));
  $image.src = image_uri || 'http://127.0.0.1:5501/app/assets/img/image_not_found.jpg';

  const $title = document.createElement('h2');
  $title.textContent = title;
  const $message = document.createElement('p');
  $message.innerHTML = shortMessage;

  // Crea un enlace <a> para el artículo
  const $link = document.createElement('a');
  $link.href = `#/article/${id}`;
  $link.appendChild($image);
  $link.appendChild($title);
  $link.appendChild($message);
  $postCard.appendChild($link);

  return $postCard;
}

// export function PostCard({ id, title, image_uri, shortMessage }) {
//   const $postCard = document.createElement('div');
//   $postCard.classList.add('post-card');
//   const $image = document.createElement('img');
//   $image.alt = 'imagen...';
//   $image.src = image_uri || 'http://127.0.0.1:5501/app/assets/img/image_not_found.jpg';
//   $image.addEventListener('error', () => {
//     $image.src = 'http://127.0.0.1:5501/app/assets/img/image_not_found.jpg';
//   });

//   $postCard.innerHTML = `
//     <a href="#/article/${id}">
//       ${$image.outerHTML}
//       <h2>${title}</h2>
//       <p>${shortMessage}</p>
//     </a>
//     `;

//   return $postCard;
// }
