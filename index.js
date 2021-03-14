const createForm = document.querySelector('.create-form');
const sendMessage = document.querySelector('#send-message');
const buttonCreate = document.querySelector('.button-create');

const shareForm = document.querySelector('.share-form');
const link = document.querySelector('#link');

const receiveForm = document.querySelector('.receive-form');
const receiveMessage = document.querySelector('#receive-message');
const buttonReload = document.querySelector('.button-reload');

const onSubmit = e => {
  e.preventDefault();

  createForm.classList.add('hidden');
  shareForm.classList.remove('hidden');

  const encrypted = btoa(sendMessage.value);

  link.value = `${location}#${encrypted}`;

  setTimeout(() => link.select(), 100);
};

const onLoad = () => {
  if (!location.hash) return;

  createForm.classList.add('hidden');
  receiveForm.classList.remove('hidden');

  const hash = location.hash.slice(1);
  const decrypted = atob(hash);

  receiveMessage.value = decrypted;
};

const onButtonReloadClick = () => {
  location.reload();
};

createForm.addEventListener('submit', onSubmit.bind(this));
window.addEventListener('load', onLoad);
buttonReload.addEventListener('click', onButtonReloadClick);
