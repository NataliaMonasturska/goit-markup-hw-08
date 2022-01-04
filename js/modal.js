(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-Modal-open]'),
    closeModalBtn: document.querySelector('[data-Modal-close]'),
    modal: document.querySelector('[data-Modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
