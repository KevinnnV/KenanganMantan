//Toggle class active
//munculin sidebar ketika hamburger menu diklik
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  //memunculkan sidebar -> .toggle(active)
  navbarNav.classList.toggle("active");
};

// Exit hamburger diluar nav
// Panggil hamburger menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  //ketika bukan hamburger & navbar
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    //menghilangkan sidebar -> .remove(active)
    navbarNav.classList.remove("active");
  }
});
