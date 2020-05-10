"use strict";

var btns = document.querySelectorAll('.button');
var modalContainer = document.querySelector('.modal-container');
var tabs = document.querySelector('.tabs');
var info = document.querySelector('.info');
modalContainer.addEventListener('click', function (e) {
  btns.forEach(function (btn) {
    btn.classList.remove('active-btn');
  });
  e.target.classList.add('active-btn');

  if (e.target.classList.contains('first')) {
    info.innerText = 'First tab got em like wat';
  } else if (e.target.classList.contains('second')) {
    info.innerText = 'Second tab is lit';
  } else {
    info.innerText = "Third tab's is where da homies at";
  }
});