$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
    });
});

// var pickAndPlace = document.getElementById("PickandPlace");
// var binPicking = document.getElementById("BinPicking");
// var mobile = document.getElementById("mobile");
// var bin = document.getElementById("bin");
// var ass = document.getElementById("ass");
// var res = document.getElementById("res");
// var pic = document.getElementById("pick");
// var noB = document.getElementById("no");
// var yesB = document.getElementById("yes");

function pick() {
    document.getElementById("mobile").style.display = "block";
    document.getElementById("BinPicking").style.display = "none";
    document.getElementById("evil").style.display = "none";

    document.getElementById("bin").style.opacity = ".5";
    document.getElementById("ass").style.opacity = ".5";
    document.getElementById("res").style.opacity = ".5";
    document.getElementById("pick").style.opacity = "1";
    document.getElementById("yes").style.opacity = "1";
    document.getElementById("no").style.opacity = "1";
}

function bin() {
    document.getElementById("mobile").style.display = "block";
    document.getElementById("PickandPlace").style.display = "none";
    document.getElementById("evil").style.display = "none";

    document.getElementById("bin").style.opacity = "1";
    document.getElementById("ass").style.opacity = ".5";
    document.getElementById("res").style.opacity = ".5";
    document.getElementById("pick").style.opacity = ".5";
    document.getElementById("yes").style.opacity = "1";
    document.getElementById("no").style.opacity = "1";
}

function yes() {

    if (document.getElementById("pick").style.opacity === "1"){
        document.getElementById("PickandPlace").style.display = "block";
        document.getElementById("dis").style.display = "block"
    }
    else if (document.getElementById("bin").style.opacity === "1"){
        document.getElementById("BinPicking").style.display = "block";
        document.getElementById("disBin").style.display = "block"
    }
    document.getElementById("dis").style.display = "block";
    document.getElementById("evil").style.display = "none";
    document.getElementById("no").style.opacity = ".5";
    document.getElementById("yes").style.opacity = "1";
}

function no() {

    document.getElementById("evil").style.display = "none";
    document.getElementById("yes").style.opacity = ".5";
    document.getElementById("no").style.opacity = "1";


    if (document.getElementById("pick").style.opacity === "1"){
        document.getElementById("PickandPlace").style.display = "block";
        document.getElementById("dis").style.display = "none";
    }
    else if (document.getElementById("bin").style.opacity === "1"){
        document.getElementById("BinPicking").style.display = "block";
        document.getElementById("disBin").style.display = "none";
    }
}

function calc() {
    document.getElementById("evil").style.display = "block";
}