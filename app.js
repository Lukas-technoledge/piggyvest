const hamburger = document.getElementById('hamburger')
const nav = document.querySelector('.intro1')

hamburger.addEventListener('click', function () {
    console.log('clicked', nav)
    hamburger.classList.toggle('isactive')
    nav.classList.toggle('active')
})