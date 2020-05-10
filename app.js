const btns = document.querySelectorAll('.button')
const modalContainer = document.querySelector('.modal-container')
const modalSection = document.querySelector('.modal-section');
const tabs = document.querySelector('.tabs');
const info = document.querySelector('.info');
const openModal = document.querySelector('.open-modal')
const closeBtn = document.querySelector('.close-btn');
const bg = document.querySelector('.bg')

openModal.addEventListener('click', () => {
    modalSection.style.visibility = 'visible';
    tabs.classList.add('open-tabs');
    bg.classList.add('bg-darken');
    modalSection.classList.add('open')
})

closeBtn.addEventListener('click', () => {
    modalSection.style.visibility = 'hidden';
    tabs.classList.remove('open-tabs');
    bg.classList.remove('bg-darken');
    modalSection.classList.remove('open')
})

modalContainer.addEventListener('click', (e) => {
    btns.forEach((btn) => {
        btn.classList.remove('active-btn')
    })
    e.target.classList.add('active-btn')
    if(e.target.classList.contains('first')){
        info.innerText = 'First tab got em like wat'
    } else if (e.target.classList.contains('second')){
        info.innerText = 'Second tab is lit'
    } else {
        info.innerText = `Third tab is where da homies at`
    }
})
