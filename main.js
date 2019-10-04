$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
    });
});

function pick() {
    document.getElementById("mobile").style.display = "block";
    document.getElementById("bin").style.opacity = ".5";
    document.getElementById("ass").style.opacity = ".5";
    document.getElementById("res").style.opacity = ".5";
    document.getElementById("pick").style.opacity = "1";
    document.getElementsById("BinPicking").style.display = "none";
}

function bin() {
    document.getElementById("mobile").style.display = "block";
    document.getElementById("bin").style.opacity = "1";
    document.getElementById("ass").style.opacity = ".5";
    document.getElementById("res").style.opacity = ".5";
    document.getElementById("pick").style.opacity = ".5";
}

function yes() {

    if (document.getElementById("pick").style.opacity = "1"){
        document.getElementById("PickandPlace").style.display = "block";
    }
    if (document.getElementById("bin").style.opacity = "1"){
        document.getElementById("PickandPlace").style.display = "block";
    }
    document.getElementById("dis").style.display = "block";
    document.getElementById("evil").style.display = "none";
    document.getElementById("no").style.opacity = ".5";
    document.getElementById("yes").style.opacity = "1";
}

function no() {
    document.getElementById("PickandPlace").style.display = "block"
    document.getElementById("dis").style.display = "none";
    document.getElementById("evil").style.display = "none";
    document.getElementById("yes").style.opacity = ".5";
    document.getElementById("no").style.opacity = "1";
}

function calc() {
    document.getElementById("evil").style.display = "block";
}