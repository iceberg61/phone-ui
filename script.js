const menu = document.getElementById('menu');
const navToggle = document.getElementsByClassName('nav-toggle');
const phone = document.getElementById('phone');
const range = document.getElementById('range');
  
navToggle[0].addEventListener('click', showBar)
function showBar() {
    menu.classList.add('active')
}

navToggle[1].addEventListener('click', hideBar)
function hideBar() {
    menu.classList.remove('active')
}

range.addEventListener('change', () => {
    phone.style.filter = "brightness(" + range.value + "%)";
})

setInterval(() => {
    let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes();
    document.querySelector('.hour-num').innerText = hour;
    document.querySelector('.min-num').innerText = min;
}, 1000);