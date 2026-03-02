(() => {
  const ACTIVE_SLIDE = 'invite__slide_active';
  const slidesInvite = Array.from(document.querySelectorAll('.invite__slide'));
  const prevBtnInvite = document.querySelector('.gallery__control-left');
  const nextBtnInvite = document.querySelector('.gallery__control-right');
  let activeInviteId = 0;

  function setActiveInviteSlide(id) {
    slidesInvite[activeInviteId].classList.remove(ACTIVE_SLIDE);
    activeInviteId = id;
    slidesInvite[activeInviteId].classList.add(ACTIVE_SLIDE);
  }

  function getPrevInviteId() {
    return activeInviteId === 0 ? slidesInvite.length - 1 : activeInviteId - 1;
  }

  function getNextInviteId() {
    return activeInviteId === slidesInvite.length - 1 ? 0 : activeInviteId + 1;
  }

  prevBtnInvite.addEventListener('click', () => setActiveInviteSlide(getPrevInviteId()));
  nextBtnInvite.addEventListener('click', () => setActiveInviteSlide(getNextInviteId()));
})();
