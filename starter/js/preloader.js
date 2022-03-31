//Preloader
const loader = document.querySelector(".loader");

//Stop Scrolling
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

//Function LoadWait
const loadWait = function () {
  setTimeout(function () {
    loader.style.display = "none";
    enableScroll();
    console.log("3 sec");
    anim();
  }, 3000);

  /* 5000 */
};

//Function Disable Scroll on Desktops
const disableScroll = function () {
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
};

//Fucntion Re-enable Scroll on Desktops
const enableScroll = function () {
  window.onscroll = function () {};
};

//REQUIRED (DISABLE SCROLL ON PHONES)

function initialiser() {
  loadWait();
  disableScroll();
}

initialiser();

/* Animation Delay */
//Animations Elements
const introLine1 = document.querySelector(".intro_content_h3");
const introLine2 = document.querySelector(".intro_content_h2");
const introLine3 = document.querySelector(".intro_content_build_h2");
const introLine4 = document.querySelector(".intro_content_p");
const myWorkBtn = document.querySelector(".my_work_btn");
const navBar = document.querySelector(".navbar_menu");
const navLogo = document.getElementById("navbar_logo");

//Anim Function
const anim = function () {
  introLine1.style.animation = "moveInRight ease-in-out 1.5s 1 normal";
  introLine1.style.animationFillMode = "forwards";

  introLine2.style.animation = "moveInRight ease-in-out 1.5s 1 0.5s normal";
  introLine2.style.animationFillMode = "forwards";

  introLine3.style.animation = "moveInRight ease-in-out 1.5s 1 1s normal";
  introLine3.style.animationFillMode = "forwards";

  introLine4.style.animation = "moveInRight ease-in-out 1.5s 1 1.5s normal";
  introLine4.style.animationFillMode = "forwards";

  myWorkBtn.style.animation = "fadeIn ease-in-out 1.5s 1 1.5s normal";
  myWorkBtn.style.animationFillMode = "forwards";

  navBar.style.animation = "moveInDown ease-in-out 1.5s 1 0.5s normal";
  navBar.style.animationFillMode = "forwards";

  navLogo.style.animation = "moveInDown ease-in-out 1.5s 1 0.5s normal";
  navLogo.style.animationFillMode = "forwards";
};
