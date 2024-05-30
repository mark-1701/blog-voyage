export function Profile() {
  const $profile = document.createElement('div');
  $profile.innerHTML = `
    <h1>Información de Usuario</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur vel explicabo, nemo reprehenderit voluptates nesciunt ipsa numquam adipisci corrupti ad autem, soluta pariatur, assumenda odit molestiae consectetur enim architecto provident?</p>
  `
  return $profile;
}