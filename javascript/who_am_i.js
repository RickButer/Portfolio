
function familyClosed() {
    document.getElementById("upFamily").style.transform='translateY(0px)'
    document.getElementById("upBiker").style.transform='translateY(0px)'
    document.getElementById("upChef").style.transform='translateY(0px)'
    document.getElementById("upCoding").style.transform='translateY(0px)'
}
window.onload=familyClosed

// var pages = {"family"}
// function selecteer(page) {
// }

function familyOpen() {
    document.getElementById("upBiker").style.transform='translateY(-700px)';
    document.getElementById("upChef").style.transform='translateY(-700px)';
    document.getElementById("upCoding").style.transform='translateY(-700px)';
}

function bikerOpen() {
    document.getElementById("upFamily").style.transform='translateY(-700px)';
    document.getElementById("upChef").style.transform='translateY(-700px)';
    document.getElementById("upCoding").style.transform='translateY(-700px)';
}

function chefOpen() {
    document.getElementById("upBiker").style.transform='translateY(-700px)';
    document.getElementById("upFamily").style.transform='translateY(-700px)';
    document.getElementById("upCoding").style.transform='translateY(-700px)';
}

function codingOpen() {
    document.getElementById("upBiker").style.transform='translateY(-700px)';
    document.getElementById("upChef").style.transform='translateY(-700px)';
    document.getElementById("upFamily").style.transform='translateY(-700px)';
}


