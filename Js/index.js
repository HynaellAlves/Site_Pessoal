import { images } from "./images.js";

var count = 1
const img = document.querySelector('.carrossel img');
const btn_back = document.querySelector('#back');
const btn_next = document.querySelector('#next');

 var src = images.find((element) => element.position == count);

      img.src = src.link;

function change_image_next() {

  count++

  img.classList.add('carrossel_change_0');

  setTimeout(() => {

    if (count <= 3) {

      var src = images.find((element) => element.position == count);

      img.src = src.link;

    } else {

      count = 1

      var src = images.find((element) => element.position == count);

      img.src = src.link;
    }

    img.classList.remove('carrossel_change_0');

  }, 1300);
}

btn_next.addEventListener('click', change_image_next);

function change_image_back() {

  count--

  img.classList.add('carrossel_change_0');

  setTimeout(() => {

    if (count > 0) {

      var src = images.find((element) => element.position == count);

      img.src = src.link;

    } else {

      count = 3

      var src = images.find((element) => element.position == count);

      img.src = src.link;
    }

    img.classList.remove('carrossel_change_0');

  }, 1300);

}

btn_back.addEventListener('click', change_image_back);

