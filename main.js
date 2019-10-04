$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
    });
});

function test1() {
    var x = document.getElementById("mobile");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function yes() {
    var x = document.getElementById("PickandPlaceMobile");
    document.getElementById("dis");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function no() {
    var x = document.getElementById("PickandPlaceMobile");
    document.getElementById("dis").remove();
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// function yes() {
//     var x = document.getElementById("PickandPlaceMobile");
//     document.getElementById("PickandPlaceStationary").style.display = "none";
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }

// function no() {
//     var x = document.getElementById("PickandPlaceStationary");
//     document.getElementById("PickandPlaceMobile").style.display = "none";
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }

function calc() {
    var x = document.getElementById("evil");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}