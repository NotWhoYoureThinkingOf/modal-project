const btns = document.querySelectorAll('.button')
const modalContainer = document.querySelector('.modal-container')
const tabs = document.querySelector('.tabs');
const info = document.querySelector('.info');

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
        info.innerText = `Third tab's is where da homies at`
    }
})
