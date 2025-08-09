document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;

  function moveSlide(index) {
    const slideContainer = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    slideContainer.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentIndex = index;
  }

  // Auto-rotate every 5 seconds
  const totalSlides = document.querySelectorAll('.dot').length;

  setInterval(() => {
    let nextIndex = (currentIndex + 1) % totalSlides;
    moveSlide(nextIndex);
  }, 2000); // 2000 ms = 2 seconds

  // Accordion logic
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = body.classList.contains('active');

      // Close all
      document.querySelectorAll('.accordion-body').forEach(el => {
        el.classList.remove('active');
        el.style.maxHeight = null; // reset max-height to collapse
        el.previousElementSibling.querySelector('span').textContent = '+';
      });

      // Toggle selected
      if (!isOpen) {
        body.classList.add('active');
        body.style.maxHeight = body.scrollHeight + "px"; // set to actual content height
        header.querySelector('span').textContent = '−';
      }
    });
  });
});
