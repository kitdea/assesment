const hamburger = document.getElementsByClassName('hamburger')[0];
const dadNavbar = document.getElementsByClassName('dad-navbar')[0];

hamburger.addEventListener('click', () => {
    dadNavbar.classList.toggle('show');

})

// var i=0;
// function read(){
//     if(!i){
//         document.getElementById("more").style.
//                 display ="inline";
//         document.getElementById("dots").style.
//                 display ="none";
//         document.getElementById("read").innerHTML="Read Less";
//         i=1;
//     }
//     else{
//         document.getElementById("more").style.
//                 display ="none";
//         document.getElementById("dots").style.
//                 display ="inline";
//         document.getElementById("read").innerHTML="Read More";
//         i=0;
//     }
// }

$(document).ready(function(){
    $("#read").click(function(){
      $("#more").slideToggle("slow");
    });
  });