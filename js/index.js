// Your code goes here
let funBus = document.querySelector('.logo-heading');
funBus.addEventListener('click', (event) => {
    alert('All aboard the Fun Bus!')
})

let images = document.querySelectorAll('.img-content' + '.intro, img');
images.forEach(function(imgHide) {
imgHide.addEventListener('mousedown', (event) => {event.currentTarget.style.opacity = 0})
imgHide.addEventListener('mouseup', (event) => {event.currentTarget.style.opacity = 100})
});

document.addEventListener('keydown', (event) => {alert(`You pressed ${event.code}`);});

let navLink = document.querySelectorAll('nav a');
 let home = navLink[0];
 let about = navLink[1];
 let blog = navLink[2];
 let contact = navLink[3];


blog.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = 'coral'
    event.target.href = 'https://endless.horse'
    event.preventDefault();
});

about.addEventListener('blur', e => {
    blog.addEventListener('focus', (event) => {event.target.style.backgroundColor = 'coral'});
    event.target.style.backgroundColor = 'green';
    event.stopPropagation();
});


home.addEventListener('pointerover', ()=> console.log("home was pointed over!"));






