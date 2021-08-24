import 'regenerator-runtime';
import '../styles/main.css';
// import '../styles/responsive.css';
import './elements/header';
import './elements/works';
import './elements/about';
import './elements/bookdrinks';
import './all.js';
// import './app.js';

eventListeners();
function eventListeners() {
  // eslint-disable-next-line no-use-before-define
  const ui = new UI();
  // preloader
  window.addEventListener('load', () => {
    ui.hidePreloader();
  });
  // nav btn
  document.querySelector('.navBtn').addEventListener('click', () => {
    ui.showNav();
  });
  // control the video
  document.querySelector('.video__switch').addEventListener('click', () => {
    ui.videoControls();
  });
  // submit the form
  document.querySelector('.drink-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('.input-name').value;
    const lastName = document.querySelector('.input-lastname').value;
    const email = document.querySelector('.input-email').value;

    const value = ui.checkEmpty(name, lastName, email);

    if (value) {
      // eslint-disable-next-line no-use-before-define
      const customer = new Customer(name, lastName, email);
      console.log(customer);
      ui.addCustomer(customer);
      ui.showFeedback('custumer added to the list', 'success');
      ui.clearFields();
    } else {
      ui.showFeedback('some form values empty', 'error');
    }
  });
  // display modal
  const links = document.querySelectorAll('.work-item__icon');

  links.forEach((item) => {
    item.addEventListener('click', (event) => {
      ui.showModal(event);
    });
  });
  // hide modal
  document.querySelector('.work-modal__close').addEventListener('click', () => {
    ui.closeModal();
  });
}

// constructor function
function UI() {
}

// hide preloader
UI.prototype.hidePreloader = function () {
  document.querySelector('.preloader').style.display = 'none';
};
// show Nav
UI.prototype.showNav = function () {
  document.querySelector('.nav').classList.toggle('nav--show');
};
// play/pause the vidoe
UI.prototype.videoControls = function () {
  const btn = document.querySelector('.video__switch-btn');
  if (!btn.classList.contains('btnSlide')) {
    btn.classList.add('btnSlide');
    document.querySelector('.video__item').pause();
  } else {
    btn.classList.remove('btnSlide');
    document.querySelector('.video__item').play();
  }
};
// check for empty values
UI.prototype.checkEmpty = function (name, lastname, email) {
  let result;
  if (name === '' || lastname === '' || email === '') {
    result = false;
  } else {
    result = true;
  }
  return result;
};

UI.prototype.showFeedback = function (text, type) {
  const feedback = document.querySelector('.drink-form__feedback');
  if (type === 'success') {
    feedback.classList.add('success');
    feedback.innerText = text;
    this.removeAlert('success');
  } else if (type === 'error') {
    feedback.classList.add('error');
    feedback.innerText = text;
    this.removeAlert('error');
  }
};
// remove alert
UI.prototype.removeAlert = function (type) {
  setTimeout(() => {
    document.querySelector('.drink-form__feedback').classList.remove(type);
  }, 3000);
};
// add customer
UI.prototype.addCustomer = function (customer) {
  const images = [1, 2, 3, 4, 5];
  const random = Math.floor(Math.random() * images.length);
  const div = document.createElement('div');
  div.classList.add('person');
  div.innerHTML = `<img src="images/person-${random}.jpeg" alt="person" class="person__thumbnail">
            <h4 class="person__name">${customer.name}</h4>
            <h4 class="person__last-name">${customer.lastname}</h4>`;
  document.querySelector('.drink-card__list').appendChild(div);
};
// clear fields
// eslint-disable-next-line func-names
UI.prototype.clearFields = function () {
  document.querySelector('.input-name').value = '';
  document.querySelector('.input-lastname').value = '';
  document.querySelector('.input-email').value = '';
};
// show modal

UI.prototype.showModal = function (event) {
  event.preventDefault();
  if (event.target.parentElement.classList.contains('work-item__icon')) {
    const { id } = event.target.parentElement.dataset;

    const modal = document.querySelector('.work-modal');
    const modalItem = document.querySelector('.work-modal__item');

    modal.classList.add('work-modal--show');
    modalItem.style.backgroundImage = `url(images/work-${id}.jpeg)`;
  }
};
// hide modal

UI.prototype.closeModal = function () {
  document.querySelector('.work-modal').classList.remove('work-modal--show');
};

// customer
function Customer(name, lastname, email) {
  // eslint-disable-next-line no-unused-expressions
  this.name = name,
  this.lastname = lastname,
  this.email = email;
}



// eslint-disable-next-line no-unused-vars
// const app = new App({
//   button: document.querySelector('#hamburgerButton'),
//   drawer: document.querySelector('#navigationDrawer'),
//   content: document.querySelector('#mainContent'),
// });

// window.addEventListener('hashchange', () => {
//   app.renderPage();
// });

// window.addEventListener('load', () => {
//   app.renderPage();
// });
