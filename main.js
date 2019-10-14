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
    // document.getElementById("BinPicking").style.display = "none";
    jQuery(".BinPicking").hide();
    jQuery("#Calc").hide();
    document.getElementById("evil").style.display = "none";
    document.getElementById("Calc").reset();

    document.getElementById("bin").style.opacity = ".5";
    document.getElementById("ass").style.opacity = ".5";
    document.getElementById("res").style.opacity = ".5";
    document.getElementById("pick").style.opacity = "1";
    document.getElementById("yes").style.opacity = "1";
    document.getElementById("no").style.opacity = "1";
}

function bin() {
    document.getElementById("mobile").style.display = "block";
    // document.getElementById("PickandPlace").style.display = "none";
    jQuery(".PickandPlace").hide();
    jQuery("#Calc").hide();
    document.getElementById("Calc").reset();
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
        document.getElementById("Calc").style.display = "block";
        document.getElementById("dis").style.display = "block"
        jQuery(".PickandPlace").show();
    }
    else if (document.getElementById("bin").style.opacity === "1"){
        document.getElementById("Calc").style.display = "block";
        document.getElementById("dis").style.display = "block"
        jQuery(".BinPicking").show();
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
        document.getElementById("Calc").style.display = "block";
        document.getElementById("dis").style.display = "none";
        jQuery(".PickandPlace").show();
    }
    else if (document.getElementById("bin").style.opacity === "1"){
        document.getElementById("Calc").style.display = "block";
        document.getElementById("dis").style.display = "none";
        jQuery(".BinPicking").show();
    }
}

function calc() {
    document.getElementById("evil").style.display = "block";
    var d = document.getElementById("disCalc").value;
    var w = document.getElementById("weiCalc").value;
    var b = document.getElementById("batCalc").value;
    var wi = document.getElementById("widCalc").value;
    var h = document.getElementById("heiCalc").value;
    var l = document.getElementById("lenCalc").value;
    var ho = document.getElementById("houCalc").value;
    var o = document.getElementById("opeCalc").value;
    var da = document.getElementById("daiCalc").value;

    var sum = d + w + b + wi + h + l + ho + o + da;
    console.log(sum)

}