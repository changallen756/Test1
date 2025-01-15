const p1 = document.querySelector(".menu ul li:nth-child(1)");
const p2 = document.querySelector(".menu ul li:nth-child(2)");
const p3 = document.querySelector(".menu ul li:nth-child(3)");
const p4 = document.querySelector(".menu ul li:nth-child(4)");
const p5 = document.querySelector(".menu ul li:nth-child(5)");
const p6 = document.querySelector(".menu ul li:nth-child(6)");
const p7 = document.querySelector(".menu ul li:nth-child(7)");
const p8 = document.querySelector(".menu ul li:nth-child(8)");
const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const item4 = document.querySelector(".item4");
const item5 = document.querySelector(".item5");
const item6 = document.querySelector(".item6");
const item7 = document.querySelector(".item7");
const item8 = document.querySelector(".item8");
const bottom = document.querySelector(".bottom");
const alignBox = document.querySelector(".alignBox");
const bars = document.querySelector(".bars");
const detail2 = document.querySelector(".detail2");
let timeOutVariable;
bars.addEventListener("click", function () {
  detail2.classList.toggle("show");
});
p1.addEventListener("mouseenter", function () {
  item1.classList.toggle("show");
});
p1.addEventListener("mouseleave", function () {
  item1.classList.toggle("show");
});
item1.addEventListener("mouseenter", function () {
  item1.classList.toggle("show");
});
item1.addEventListener("mouseleave", function () {
  item1.classList.toggle("show");
});
p2.addEventListener("mouseenter", function () {
  item2.classList.toggle("show");
});
p2.addEventListener("mouseleave", function () {
  item2.classList.toggle("show");
});
p3.addEventListener("mouseenter", function () {
  item3.classList.toggle("show");
});
p3.addEventListener("mouseleave", function () {
  item3.classList.toggle("show");
});
p4.addEventListener("mouseenter", function () {
  item4.classList.toggle("show");
});
p4.addEventListener("mouseleave", function () {
  item4.classList.toggle("show");
});
p5.addEventListener("mouseenter", function () {
  item5.classList.toggle("show");
});
p5.addEventListener("mouseleave", function () {
  item5.classList.toggle("show");
});
p6.addEventListener("mouseenter", function () {
  item6.classList.toggle("show");
});
p6.addEventListener("mouseleave", function () {
  item6.classList.toggle("show");
});
p7.addEventListener("mouseenter", function () {
  item7.classList.toggle("show");
});
p7.addEventListener("mouseleave", function () {
  item7.classList.toggle("show");
});
p8.addEventListener("mouseenter", function () {
  item8.classList.toggle("show");
});
p8.addEventListener("mouseleave", function () {
  item8.classList.toggle("show");
});
bottom.addEventListener("mouseenter", function () {
  bottom.classList.toggle("show");
  alignBox.classList.toggle("show");
});
bottom.addEventListener("mouseleave", function () {
  bottom.classList.toggle("show");
  timeOutVariable = window.setTimeout(function () {
    alignBox.classList.toggle("show");
  }, 300);
});
item2.addEventListener("mouseenter", function () {
  item2.classList.toggle("show");
});
item2.addEventListener("mouseleave", function () {
  item2.classList.toggle("show");
});
item3.addEventListener("mouseenter", function () {
  item3.classList.toggle("show");
});
item3.addEventListener("mouseleave", function () {
  item3.classList.toggle("show");
});
item4.addEventListener("mouseenter", function () {
  item4.classList.toggle("show");
});
item4.addEventListener("mouseleave", function () {
  item4.classList.toggle("show");
});
item5.addEventListener("mouseenter", function () {
  item5.classList.toggle("show");
});
item5.addEventListener("mouseleave", function () {
  item5.classList.toggle("show");
});
item6.addEventListener("mouseenter", function () {
  item6.classList.toggle("show");
});
item6.addEventListener("mouseleave", function () {
  item6.classList.toggle("show");
});
item7.addEventListener("mouseenter", function () {
  item7.classList.toggle("show");
});
item7.addEventListener("mouseleave", function () {
  item7.classList.toggle("show");
});
item8.addEventListener("mouseenter", function () {
  item8.classList.toggle("show");
});
item8.addEventListener("mouseleave", function () {
  item8.classList.toggle("show");
});
