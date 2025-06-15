function subscribeNewsletter(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.querySelector('input[type="email"]').value;
  if (email) {
    alert('Thank you for subscribing, ' + email + '!');
    form.reset();
  }
}

const cards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');

function setActiveCard(index) {
    cards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Click dots to change active card
dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => setActiveCard(idx));
});

// (Optional) Clicking card itself can also activate
cards.forEach((card, idx) => {
    card.addEventListener('click', () => setActiveCard(idx));
});