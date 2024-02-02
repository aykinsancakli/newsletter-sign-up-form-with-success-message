// ELEMENTS
const formEl = document.querySelector('.form__mail-box');
const errorTextEl = document.querySelector('.form__error-message');
const form = document.querySelector('.form');
const newsletterEl = document.querySelector('.newsletter');
const successEl = document.querySelector('.success');
const emailEl = document.querySelector('.email');
const btnEl = document.querySelector('.btn--success');

// FORM VALIDATION
form.addEventListener('submit', (e) => {
  let messages = [];
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (
    !formEl.value.match(pattern) ||
    formEl.value === '' ||
    formEl.value === null
  ) {
    messages.push('Valid email required');
    console.log(formEl.value.length);
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorTextEl.innerText = messages.join(', ');
    formEl.style.backgroundColor = 'rgba(255, 98, 87, 0.2)';
    formEl.style.border = '1px solid rgb(255, 98, 87)';
    formEl.style.color = 'rgb(255, 98, 87)';
  } else {
    e.preventDefault();
    newsletterEl.classList.toggle('hidden');
    successEl.classList.toggle('hidden');
    emailEl.textContent = formEl.value;
  }
});

// PAGE RELOAD WHEN DISMISS BUTTON CLICKED
btnEl.addEventListener('click', function (e) {
  e.preventDefault();
  successEl.classList.add('animate');
  successEl.style.opacity = '0';
  setTimeout(() => window.location.reload(), 2500);
});
