/*document.getElementById('menu').setAttribute('style', 'visibility:hidden');
document.getElementById('menu').setAttribute('style', 'visibility:visible');*/

    let menu = document.getElementById('menu');

function showMenu () {
    if (menu.style.display != "block") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
};

    let contact1 = document.getElementById('contact-item-mob1');
    let contact2 = document.getElementById('contact-item-mob2');
    let contact3 = document.getElementById('contact-item-mob3');

 function showMenu2 () {

      if (contact1.style.display != "block") {
      contact1.style.display = "block";
    } else {
      contact1.style.display = "none";
    };  
    
    if (contact2.style.display != "block") {
      contact2.style.display = "block";
    } else {
      contact2.style.display = "none";
    };  

    if (contact3.style.display != "block") {
      contact3.style.display = "block";
    } else {
      contact3.style.display = "none";
    }  
  };




/*
function clickMenu () {
    menu.addEventListener('click', showMenu())
};

function myFunction() {
    var x = document.getElementById("myDIV");
    
  } */