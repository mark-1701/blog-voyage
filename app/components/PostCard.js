export function PostCard({ id, title, image_uri, shortMessage }) {
  const image_not_found = 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg';
  const $postCard = document.createElement('div');
  $postCard.classList.add('post-card');
  const $image = document.createElement('img');
  $image.alt = 'imagen...';
  $image.addEventListener('error', () => ($image.src = image_not_found));
  $image.src = image_uri || image_not_found;

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
//   $image.src = image_uri || 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg';
//   $image.addEventListener('error', () => {
//     $image.src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg';
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
