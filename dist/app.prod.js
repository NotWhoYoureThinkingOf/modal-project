"use strict";var btns=document.querySelectorAll(".button"),modalContainer=document.querySelector(".modal-container"),modalSection=document.querySelector(".modal-section"),tabs=document.querySelector(".tabs"),info=document.querySelector(".info"),openModal=document.querySelector(".open-modal"),closeBtn=document.querySelector(".close-btn"),bg=document.querySelector(".bg");openModal.addEventListener("click",function(){modalSection.style.visibility="visible",tabs.classList.add("open-tabs"),bg.classList.add("bg-darken"),modalSection.classList.add("open")}),closeBtn.addEventListener("click",function(){modalSection.style.visibility="hidden",tabs.classList.remove("open-tabs"),bg.classList.remove("bg-darken"),modalSection.classList.remove("open")}),modalContainer.addEventListener("click",function(e){btns.forEach(function(e){e.classList.remove("active-btn")}),e.target.classList.add("active-btn"),e.target.classList.contains("first")?info.innerText="First tab got em like wat":e.target.classList.contains("second")?info.innerText="Second tab is lit":info.innerText="Third tab is where da homies at"});