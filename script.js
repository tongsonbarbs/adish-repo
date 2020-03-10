"use strict";

var dropdown = document.getElementById("nav-choice-container");
const myLi = document.querySelectorAll("li.nav-choice2");

function burgerclick(x) {

    x.classList.toggle("change");

        if (dropdown.style.marginTop === "80px") {
            dropdown.style.marginTop = "-100vh";
        } else {
            dropdown.style.marginTop = "80px";
    }

}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("main-nav-bar").style.backgroundColor = "var(--white)";
    document.getElementById("main-nav-bar").style.boxShadow = "var(--navshadow)";


    for (let i = 0; i < myLi.length; i++) {
        myLi[i].style.color = "var(--dark)";


      }

      document.getElementById("burger-layer-1").style.backgroundColor = "var(--dark)";
      document.getElementById("burger-layer-2").style.backgroundColor = "var(--dark)";
      document.getElementById("burger-layer-3").style.backgroundColor = "var(--dark)";

  } else {
    document.getElementById("main-nav-bar").style.backgroundColor = "var(--transparent)";
    document.getElementById("main-nav-bar").style.boxShadow = "var(--transparent)";


    for (let i = 0; i < myLi.length; i++) {
        myLi[i].style.color = "var(--white)";

      }

      document.getElementById("burger-layer-1").style.backgroundColor = "var(--white)";
      document.getElementById("burger-layer-2").style.backgroundColor = "var(--white)";
      document.getElementById("burger-layer-3").style.backgroundColor = "var(--white)";
  }
}

function hover(element){
    element.style.color = "var(--orange)";
}


function hoverOff(element){
    if (document.getElementById("main-nav-bar").style.backgroundColor === "var(--transparent)"){
        element.style.color = "var(--white)";
        document.getElementById("main-nav-bar").style.backgroundColor = "var(--transparent)"

    }else{
        element.style.color = "var(--dark)";
        document.getElementById("main-nav-bar").style.backgroundColor = "var(--white)";
    }
}



    
