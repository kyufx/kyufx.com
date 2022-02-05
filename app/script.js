const hamburger = document.querySelector('#hamburger');
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fade = document.querySelectorAll('.fade');
const unfade = document.querySelectorAll('.unfade');
const video = document.querySelector('.video')

hamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){ //close hamburger
        header.classList.remove('open');
        body.classList.remove('noscroll');
        //body.classList.add('noscroll');
        fade.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
        unfade.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
    }
    else { //open hamburger
    header.classList.add('open');
    //body.classList.remove('noscroll');
    body.classList.add('noscroll');
    fade.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    });
    unfade.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });
};})