var htmlProgress = document.getElementById("yellow_bar");
var cssProgress = document.getElementById("green_bar");
var jsProgress = document.getElementById("blue_bar");
var awsomeProgress = document.getElementById("purple_bar");

function htmlText() {
    htmlProgress.innerHTML='html 80%';
}
setTimeout(htmlText, 4500);

function cssText() {
    cssProgress.innerHTML='css 65%'
}
setTimeout(cssText, 4500)

function jsText() {
    jsProgress.innerHTML='js 20%'
}
setTimeout(jsText, 4500)

function awsomeText() {
    awsomeProgress.innerHTML='awsome 100%'
}
setTimeout(awsomeText, 4500)