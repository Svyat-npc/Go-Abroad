const testimonialsSlides = document.querySelectorAll('.testimonials__slide');
const testimonialsDots = document.querySelectorAll('.testimonials__dot');

testimonialsDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    testimonialsSlides.forEach(slide => slide.classList.remove('active'));
    testimonialsDots.forEach(d => d.classList.remove('active'));

    testimonialsSlides[index].classList.add('active');
    dot.classList.add('active');
  });
});

// university
const universitySlides = document.querySelectorAll('.university__slide');
const universityDots = document.querySelectorAll('.dot');

universityDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    universitySlides.forEach(slide => slide.classList.remove('active'));
    universityDots.forEach(d => d.classList.remove('active'));

    universitySlides[index].classList.add('active');
    dot.classList.add('active');
  });
});
