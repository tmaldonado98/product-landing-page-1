/*document.getElementById('menu').setAttribute('style', 'visibility:hidden');
document.getElementById('menu').setAttribute('style', 'visibility:visible');*/


function showMenu () {
    let menu = document.getElementById('menu');
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
    
};
/*
function clickMenu () {
    menu.addEventListener('click', showMenu())
};

function myFunction() {
    var x = document.getElementById("myDIV");
    
  } */