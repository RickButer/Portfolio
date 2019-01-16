function familyClosed() {
    document.getElementById("upFamily").style.transform = 'translateY(0px)'
    document.getElementById("upBiker").style.transform = 'translateY(0px)'
    document.getElementById("upChef").style.transform = 'translateY(0px)'
    document.getElementById("upCoding").style.transform = 'translateY(0px)'
}
window.onload = familyClosed


function familyOpen() {
    document.getElementById("upBiker").style.transform = 'translateY(-700px)';
    document.getElementById("upChef").style.transform = 'translateY(-700px)';
    document.getElementById("upCoding").style.transform = 'translateY(-700px)';
    document.getElementById('family_container').style.transform = 'translateY(0px)';

}


function bikerOpen() {
    document.getElementById("upFamily").style.transform = 'translateY(-700px)';
    document.getElementById("upChef").style.transform = 'translateY(-700px)';
    document.getElementById("upCoding").style.transform = 'translateY(-700px)';
    document.getElementById("upBiker").style.transform = 'translateX(-400px)';
    document.getElementById('biker_container').style.transform = 'translateY(0px)';
    
}

function chefOpen() {
    document.getElementById("upBiker").style.transform = 'translateY(-700px)';
    document.getElementById("upFamily").style.transform = 'translateY(-700px)';
    document.getElementById("upCoding").style.transform = 'translateY(-700px)';
    document.getElementById('chef_container').style.display = 'block';
    document.getElementById("upChef").style.transform = 'translateX(-750px)';
    document.getElementById("chef_container").style.transform = 'translateY(0px)';
}

function codingOpen() {
    document.getElementById("upBiker").style.transform = 'translateY(-700px)';
    document.getElementById("upChef").style.transform = 'translateY(-700px)';
    document.getElementById("upFamily").style.transform = 'translateY(-700px)';
    document.getElementById('coding_container').style.display = 'block';
    document.getElementById('coding_container').style.transform= 'translateY(0px)';
}
// ****************************************************************

function familyBack() {
    document.getElementById("upBiker").style.transform = 'translateY(0px)';
    document.getElementById("upChef").style.transform = 'translateY(0px)';
    document.getElementById("upCoding").style.transform = 'translateY(0px)';
    document.getElementById('family_container').style.transform = 'translateY(800px)';
}

function bikerBack() {
    document.getElementById("upFamily").style.transform = 'translateY(0px)';
    document.getElementById("upChef").style.transform = 'translateY(0px)';
    document.getElementById("upCoding").style.transform = 'translateY(0px)';
    document.getElementById("upBiker").style.transform = 'translateX(0px)';
    document.getElementById('biker_container').style.transform = 'translateY(800px)';
}

function chefBack() {
    document.getElementById("upBiker").style.transform = 'translateY(0px)';
    document.getElementById("upFamily").style.transform = 'translateY(0px)';
    document.getElementById("upCoding").style.transform = 'translateY(0px)';
    document.getElementById("upChef").style.transform = 'translateX(0px)';
    document.getElementById("chef_container").style.transform = 'translateY(800px)';
}

function codingBack() {
    document.getElementById("upBiker").style.transform = 'translateY(0px)';
    document.getElementById("upChef").style.transform = 'translateY(0px)';
    document.getElementById("upFamily").style.transform = 'translateY(0px)';
    document.getElementById('coding_container').style.display = 'block';
    document.getElementById('coding_container').style.transform= 'translateY(800px)';
}