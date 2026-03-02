
const buttons = document.querySelectorAll('.openPlayer');


const modals = document.querySelectorAll('.modal');


buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modals[index].style.display = 'flex';
    modals[index].classList.add('show');
  });
});


modals.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300);
    }
  });
});