const slides = document.querySelectorAll('.university__slide');
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    // активируем выбранный
    slides[index].classList.add('active');
    dot.classList.add('active');
  });
});
