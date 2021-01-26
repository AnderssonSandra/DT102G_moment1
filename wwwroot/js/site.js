// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

function setActiveClass(site) {
    //get elements
    var start = document.getElementById("start");
    var razor = document.getElementById("razor");
    var about = document.getElementById("about");

    switch (site) {
        case "Om":
            console.log("about");
            about.classList.add("active");
            break;
        case "Razor":
            console.log("razir");
            razor.classList.add("active");
            break;
        case "Startsida":
            console.log("start");
            start.classList.add("active");
            break;
    }
}