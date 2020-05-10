"use strict";

var btns = document.querySelectorAll('.button');
var modalContainer = document.querySelector('.modal-container');
var modalSection = document.querySelector('.modal-section');
var tabs = document.querySelector('.tabs');
var info = document.querySelector('.info');
var openModal = document.querySelector('.open-modal');
var closeBtn = document.querySelector('.close-btn');
var bg = document.querySelector('.bg');
openModal.addEventListener('click', function () {
  modalSection.style.visibility = 'visible';
  tabs.classList.add('open-tabs');
  bg.classList.add('bg-darken');
  modalSection.classList.add('open');
});
closeBtn.addEventListener('click', function () {
  modalSection.style.visibility = 'hidden';
  tabs.classList.remove('open-tabs');
  bg.classList.remove('bg-darken');
  modalSection.classList.remove('open');
});
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
    info.innerText = "Third tab is where da homies at";
  }
});