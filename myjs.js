//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Dark Mode Feature
var icon = document.getElementById ("icon");

icon.onclick=function(){

    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        icon.src="/images/sun-regular.png";
       
    }else{
        icon.src="/images/moon-regular.svg";
    }
                                          I

}
