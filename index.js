const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', function () {
    nav.classList.toggle('show');
    navToggle.classList.toggle('active');
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 600) {
            nav.classList.remove('show');
            navToggle.classList.remove('active');
        }
    });
});

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const arrow = question.querySelector('.arrow');
        item.classList.toggle('active');
        arrow.textContent = item.classList.contains('active') ? 'v' : '>';
    });
});
const searchInput = document.querySelector('.search-bar input');
const faqItems = document.querySelectorAll('.sub-faq');
const noResultMsg = document.createElement('div');
noResultMsg.textContent = 'No results found.';
noResultMsg.style.textAlign = 'center';
noResultMsg.style.marginTop = '10px';
noResultMsg.style.display = 'none';
document.querySelector('.faq-main').appendChild(noResultMsg);
searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    let anyVisible = false;
    faqItems.forEach(item => {
        const questionText = item.querySelector('.faq-question span').textContent.toLowerCase();
        if (questionText.startsWith(query) && query !== '') {
            item.style.display = 'block';
            anyVisible = true;
        } else if (query === '') {
            item.style.display = 'block';
            anyVisible = true;
        } else {
            item.style.display = 'none';
        }
    });
    noResultMsg.style.display = anyVisible ? 'none' : 'block';
});

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

dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => setActiveCard(idx));
});

cards.forEach((card, idx) => {
    card.addEventListener('click', () => setActiveCard(idx));
});


function subscribeNewsletter(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.querySelector('input[type="email"]').value;
  if (email) {
    alert('Thank you for subscribing, ' + email + '!');
    form.reset();
  }
}


