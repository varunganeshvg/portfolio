const sections = document.querySelectorAll('.reveal');

function revealOnScroll() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 120 && rect.bottom > 120) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();