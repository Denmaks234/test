const burgerOpen = document.querySelector('.burger')
const links = document.querySelectorAll('.list__link')
const closeBtn = document.querySelector('.close')
const list = document.querySelector('.list')
const body = document.querySelector('body')

function closeMenu(){
    list.style.right = '-200px'
    closeBtn.style.right = '-200px'
    body.style.overflow = ' auto'
}
function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1; // Місяці нумеруються з 0
    var year = date.getFullYear();
    
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    
    return day + '.' + month + '.' + year;
}
function startTimer(duration, display) {
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}
burgerOpen.addEventListener('click',()=>{
    list.style.right = '0px'
    closeBtn.style.right = '20px'
    body.style.overflow = ' hidden'
})
closeBtn.addEventListener('click',()=>{
   closeMenu()
})
links.forEach(link => link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    closeMenu();
    setTimeout(() => {
        window.location.hash = targetId;
    }, 300); 
}));

var element = document.getElementById('phone');
            var maskOptions = {
                mask: '+{38}(\\000)000-00-00',
                lazy: false // Показувати маску навіть коли поле пусте
            };
            var mask = IMask(element, maskOptions);


window.onload = function () {
    var twoHours = 60 * 60 * 2,
    display = document.querySelector('#timer');
    startTimer(twoHours, display);
    var today = new Date();
    document.querySelector('#date').textContent = formatDate(today);
};
