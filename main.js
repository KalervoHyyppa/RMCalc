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

    document.getElementById("dis").style.display = "block";
    document.getElementById("evil").style.display = "none";
    document.getElementById("no").style.opacity = ".5";
    document.getElementById("yes").style.opacity = "1";
    document.getElementById("Calc").reset();

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

}

function no() {

    document.getElementById("evil").style.display = "none";
    document.getElementById("yes").style.opacity = ".5";
    document.getElementById("no").style.opacity = "1";
    document.getElementById("Calc").reset();


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

    var visClass = document.getElementsByClassName("valid");
    var visInput = document.getElementsByClassName("visInput");
    var error = []; //an array of the inputs that aren't valid
    var formVal = true;

    // for loop that validates the answers in each form that is visible
    console.log(visClass.length);
    for (i = 0; i<visInput.length; i++) {

        visInput[i].style.borderColor = "";

        console.log(visInput[i].value);
        if (visInput[i].offsetParent === null) {
            console.log(i + " is not visible");
            // Ignore if not visible
        }
        else {
            console.log(i + " is visible");
            if (isNaN(visInput[i].value)) {
                error.push(i);
                formVal = false;
            }
            if (visInput[i].value == null || visInput[i].value == "") {
                error.push(i);
                formVal = false;
            }
        }
    }
    console.log(error);
    console.log(formVal + " formval");

    if (formVal == true) {

        //If the weight of the object is greater than the limit of the gripper
        if (visInput[4].value > 10) {
            alert("She's to fat!");
            console.log("she big");
            formVal = false;
            error.push(4);
        }
    
        //If the size of the object is greater than the limit of the gripper
        if (Math.min(visInput[1].value, visInput[2].value, visInput[3].value) > 10) {
            alert("Object to large");
            formVal = false;
            error.push(1, 2, 3);
        }
    }

    if (formVal == false) {
        for (i = 0; i<error.length; i++) {
            var x = error[i];
            console.log(x + " this is x")
            visInput[x].style.borderColor = "red";
        }
    }

    //If the form is valid after all the checks then calculate the final value cost
    if (formVal == true) {
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
        console.log(sum);
    }
    console.log(formVal);
    console.log(error);

}