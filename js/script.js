
const button = document.getElementById('button')
const text = document.getElementById('text')
const textNav = document.getElementById('textnav')
const body = document.getElementById('body')




button.addEventListener('click', function () {
    text.classList.toogle('darkModeText')
    textNav.classList.toogle('darkModeText')
    body.classList.toogle('darkModeBack')
})