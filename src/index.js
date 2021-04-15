
import {create} from './modules/pageload';

import {tabs} from './modules/pageTabs';

document.querySelector(".plan1").addEventListener('click', function(){
  document.querySelector(".plan1").firstChild.checked = true;
});

document.querySelector(".plan2").addEventListener('click', function(){
  document.querySelector(".plan2").firstChild.checked = true;
});

document.querySelector(".plan3").addEventListener('click', function(){
  document.querySelector(".plan3").firstChild.checked = true;
});

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

document.querySelector("#nav-item1").addEventListener("click", function(){
  document.getElementById("expand-btn").scrollIntoView({behavior: 'smooth'});
  document.querySelector(".plan1").firstChild.checked = true;
});

document.getElementById("nav-item2").addEventListener("click", function(){
  document.getElementById("expand-btn2").scrollIntoView({behavior: 'smooth'});
  document.querySelector(".plan2").firstChild.checked = true;
});

document.getElementById("nav-item3").addEventListener("click", function(){
  document.getElementById("expand-btn3").scrollIntoView({behavior: 'smooth'});
  document.querySelector(".plan3").firstChild.checked = true;
});

var currentOrder;
//get the chosen order item by click and add to current order:
document.getElementById("pep").addEventListener("click", function(){
  localStorage.setItem("order", document.getElementById("pep").nextSibling.innerHTML);
  currentOrder = localStorage.getItem("order");
  document.getElementById("orderItem").innerHTML = currentOrder;
});

document.getElementById("hula").addEventListener("click", function(){
  localStorage.setItem("order", document.getElementById("hula").nextSibling.innerHTML);
  currentOrder = localStorage.getItem("order");
  document.getElementById("orderItem").innerHTML = currentOrder;
});
document.getElementById("cheese").addEventListener("click", function(){
  localStorage.setItem("order", document.getElementById("cheese").nextSibling.innerHTML);
  currentOrder = localStorage.getItem("order");
  document.getElementById("orderItem").innerHTML = currentOrder;
});

document.getElementById("clearCart").addEventListener("click", function (){
 localStorage.clear;
 document.getElementById("orderItem").innerHTML = "";
});