document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

});

window.onscroll = function() {
    if (window.scrollY) {
        document.getElementById("navbar").classList.add("nav-scroll");
        document.getElementById("logo").style.display = "none";
    } else {
        document.getElementById("navbar").classList.remove("nav-scroll");
        document.getElementById("logo").style.display = "block";
    }
};


const bannerVideo = document.getElementById('banner-video');
const banner = document.getElementById("banner");

banner.addEventListener("click", function() {
    if (bannerVideo.paused){
        bannerVideo.play();
        banner.classList.remove("overlay-on-container");
    } else {
        bannerVideo.pause();
        banner.classList.toggle("overlay-on-container");

    }
});

// const addButton = document.querySelector(".add-button");
// const addBag = document.getElementById("add-bag");
// addButton.addEventListener("click", function() {
//
// });