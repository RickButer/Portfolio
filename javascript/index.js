// Start color slide in index page*****************************************

var firstColorSlider = document.getElementsByClassName('color1')[0];
var secondColorSlider = document.getElementsByClassName('color2')[0];
var thirdColorSlider = document.getElementsByClassName('color3')[0];
var fourthColorSlider = document.getElementsByClassName('color4')[0];


function slide1() {
    firstColorSlider.style.transform = 'translateX(0px)';
    firstColorSlider.style.transition = '0.8s';
}
setTimeout(slide1, 3400);

function slide2() {
    secondColorSlider.style.transform = 'translateX(0px)';
    secondColorSlider.style.transition = '0.8s';
}
setTimeout(slide2, 3600);

function slide3() {
    thirdColorSlider.style.transform = 'translateX(0px)';
    thirdColorSlider.style.transition = '0.8s';
}
setTimeout(slide3, 3800);

function slide4() {
    fourthColorSlider.style.transform = 'translateX(0px)';
    fourthColorSlider.style.transition = '0.8s';
}
setTimeout(slide4, 4000);

// Begin text index site fade in *****************************************************

var text1 = document.getElementsByClassName('who_am_i')[0];
var text2 = document.getElementsByClassName('how_can_i_help')[0];
var text3 = document.getElementsByClassName('contact_me')[0];


function text1Fade() {
    text1.style.display = 'unset';
}
setTimeout(text1Fade, 4300);

function text2Fade() {
    text2.style.display = 'unset';
}
setTimeout(text2Fade, 4600);

function text3Fade() {
    text3.style.display = 'unset';
}
setTimeout(text3Fade, 4900);