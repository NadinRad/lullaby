const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');
const openPopupButton = document.getElementById("first");
const closePopupButton = document.querySelector('.popup-close-button');
const body = document.querySelector('body');
const html = document.querySelector('html');

openPopupButton.addEventListener('click', () => {
  popup.style.display = 'flex';
  body.classList.add('modal-open');
  html.classList.add('modal-open');
});

closePopupButton.addEventListener('click', () => {
  popup.style.display = 'none';
  body.classList.remove('modal-open');
  html.classList.remove('modal-open');
});

popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});


const popup1 = document.querySelector('.popup1');
const popupContent1 = document.querySelector('.popup-content1');
const openPopupButton1 = document.getElementById("second");
const closePopupButton1 = document.querySelector('.popup-close-button1');

openPopupButton1.addEventListener('click', () => {
  popup1.style.display = 'flex';
  body.classList.add('modal-open');
  html.classList.add('modal-open');
});

closePopupButton1.addEventListener('click', () => {
  popup1.style.display = 'none';
  body.classList.remove('modal-open');
  html.classList.remove('modal-open');
});

popup1.addEventListener('click', (event) => {
  if (event.target === popup1) {
    popup1.style.display = 'none';
  }
});

const popup2 = document.querySelector('.popup2');
const popupContent2 = document.querySelector('.popup-content2');
const openPopupButton2 = document.getElementById("third");
const closePopupButton2 = document.querySelector('.popup-close-button2');

openPopupButton2.addEventListener('click', () => {
  popup2.style.display = 'flex';
  body.classList.add('modal-open');
  html.classList.add('modal-open');
});

closePopupButton2.addEventListener('click', () => {
  popup2.style.display = 'none';
  body.classList.remove('modal-open');
  html.classList.remove('modal-open');
});

popup2.addEventListener('click', (event) => {
  if (event.target === popup2) {
    popup2.style.display = 'none';
  }
});

const popup3 = document.querySelector('.popup3');
const popupContent3 = document.querySelector('.popup-content3');
const openPopupButton3 = document.getElementById("fourth");
const closePopupButton3 = document.querySelector('.popup-close-button3');

openPopupButton3.addEventListener('click', () => {
  popup3.style.display = 'flex';
  body.classList.add('modal-open');
  html.classList.add('modal-open');
});

closePopupButton3.addEventListener('click', () => {
  popup3.style.display = 'none';
  body.classList.remove('modal-open');
  html.classList.remove('modal-open');
});

popup3.addEventListener('click', (event) => {
  if (event.target === popup3) {
    popup3.style.display = 'none';
  }
});


const popup4 = document.querySelector('.popup4');
const popupContent4 = document.querySelector('.popup-content4');
const openPopupButton4 = document.getElementById("fifth");
const closePopupButton4 = document.querySelector('.popup-close-button4');

openPopupButton4.addEventListener('click', () => {
  popup4.style.display = 'flex';
  body.classList.add('modal-open');
  html.classList.add('modal-open');
});

closePopupButton4.addEventListener('click', () => {
  popup4.style.display = 'none';
  body.classList.remove('modal-open');
  html.classList.remove('modal-open');
});

popup4.addEventListener('click', (event) => {
  if (event.target === popup4) {
    popup4.style.display = 'none';
  }
});


const popup5 = document.querySelector('.popup5');
const popupContent5 = document.querySelector('.popup-content5');
const openPopupButton5 = document.getElementById("sixth");
const closePopupButton5 = document.querySelector('.popup-close-button5');

openPopupButton5.addEventListener('click', () => {
  popup5.style.display = 'flex';
  body.classList.add('modal-open');
  html.classList.add('modal-open');
});

closePopupButton5.addEventListener('click', () => {
  popup5.style.display = 'none';
  body.classList.remove('modal-open');
  html.classList.remove('modal-open');
});

popup5.addEventListener('click', (event) => {
  if (event.target === popup5) {
    popup5.style.display = 'none';
  }
});

const popup6 = document.querySelector('.popup6');
const popupContent6 = document.querySelector('.popup-content6');
const openPopupButton6 = document.getElementById("seventh");
const closePopupButton6 = document.querySelector('.popup-close-button6');

openPopupButton6.addEventListener('click', () => {
  popup6.style.display = 'flex';
  body.classList.add('modal-open');
  html.classList.add('modal-open');
});

closePopupButton6.addEventListener('click', () => {
  popup6.style.display = 'none';
  body.classList.remove('modal-open');
  html.classList.remove('modal-open');
});

popup6.addEventListener('click', (event) => {
  if (event.target === popup6) {
    popup6.style.display = 'none';
  }
});

const popup7 = document.querySelector('.popup7');
const popupContent7 = document.querySelector('.popup-content7');
const openPopupButton7 = document.getElementById("eighth");
const closePopupButton7 = document.querySelector('.popup-close-button7');

openPopupButton7.addEventListener('click', () => {
  popup7.style.display = 'flex';
  body.classList.add('modal-open');
  html.classList.add('modal-open');
});

closePopupButton7.addEventListener('click', () => {
  popup7.style.display = 'none';
  body.classList.remove('modal-open');
  html.classList.remove('modal-open');
});

popup7.addEventListener('click', (event) => {
  if (event.target === popup7) {
    popup7.style.display = 'none';
  }
});

const popup8 = document.querySelector('.popup8');
const popupContent8 = document.querySelector('.popup-content8');
const openPopupButton8 = document.getElementById("nineth");
const closePopupButton8 = document.querySelector('.popup-close-button8');

openPopupButton8.addEventListener('click', () => {
  popup8.style.display = 'flex';
  body.classList.add('modal-open');
  html.classList.add('modal-open');
});

closePopupButton8.addEventListener('click', () => {
  popup8.style.display = 'none';
  body.classList.remove('modal-open');
  html.classList.remove('modal-open');
});

popup8.addEventListener('click', (event) => {
  if (event.target === popup8) {
    popup8.style.display = 'none';
  }
});

