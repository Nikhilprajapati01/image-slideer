const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
const cirser_items = document.querySelector(".items");
const cirser_item = document.querySelector(".item");
const cirser = document.querySelector(".curser");
const ce_items = document.querySelectorAll(".item");
console.log(ce_items);

const firstclone = ce_items[0].cloneNode(true);

let itemlength = ce_items.length;

let lastind = ce_items[itemlength - 1].cloneNode(true);

cirser_items.appendChild(firstclone);
cirser_items.insertBefore(lastind, ce_items[0]);

let index = 1;
itemlength += 2;

const randerimg = (visiblity) => {
  cirser_items.style.transition = "0.2s ease";
  index = visiblity;
  cirser_items.style.transform = `translateX(-${index * 100}%)`;

  document.addEventListener("transitionend", () => {
    if (index === 0) {
      index = itemlength - 2;
    } else if (index === itemlength - 1) {
      index = 0;
    }

    if (index === 1 || index === itemlength - 2) {
      cirser_items.style.transition = "none";
    }
    cirser_items.style.transform = `translateX(-${index * 100}%)`;
  });
};

const nextind = function () {
  let nextind = index + 1;
  randerimg(nextind);
};

const prevind = function () {
  let previous = index - 1;
  randerimg(previous);
};

randerimg(index);

next.addEventListener("click", nextind);
prev.addEventListener("click", prevind);
