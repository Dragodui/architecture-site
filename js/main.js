const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
const next = document.querySelector("#next");
const back = document.querySelector("#back");
const home = document.querySelector("#home")
const categories = document.querySelectorAll("#category");
const menu = document.querySelector("#menu").cloneNode(1);
hamb.addEventListener("click", hambHandler);


function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//SWIPER
var i = 1;
next.addEventListener("click", swipe_image_next);
back.addEventListener("click", swipe_image_back);
function swipe_image_next() {
  i++;
  if (i>3) {
    i = 1;
  }
  home.style.background = 'url("/img/'+ i +'.jpg") no-repeat center';
}

function swipe_image_back() {
  i--;
  if (i<=0) {
    i = 3;
  }
  home.style.background = 'url("/img/'+ i +'.jpg") no-repeat center';
}
// CATIGORIES
categories.forEach((category) =>{
  category.addEventListener("click", function() {
  for (category1 of categories) {
    category1.classList.remove("chosen"); 
  }
  category.classList.toggle("chosen");
  });
});
document.querySelector('select#reasons').addEventListener('change', function() {
  document.querySelector('input[name="reason"]').value = (this.value);
});
