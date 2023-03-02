let tablinks = document.getElementsByClassName("tab-links");
let tabcontent = document.getElementsByClassName("tab-content");

let sidemenu = document.getElementById("sidemenu");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcon of tabcontent){
        tabcon.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-260px";
}