const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const progresses = document.querySelectorAll(".progress-done");
const titles = document.querySelectorAll("h2");

//Navbar
menuIcon.addEventListener("click", function () {
  navbar.classList.toggle("change");
});

//Progress
progresses.forEach((progress) => {
  setTimeout(() => {
    progress.style.opacity = 1;
    progress.style.width = progress.getAttribute("data-done") + "%";
  }, 500);
});

// Initialize and add the map
// function initMap() {
//   // The location of Uluru
//   const uluru = { lat: 40.008, lng: 28.641 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: uluru,
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }

// window.initMap = initMap;

//Intersection Observer
const options = {
  threshold: 0,
  rootMargin: "-150px",
};
const appearOnScroll = new IntersectionObserver(function (
  entires,
  appearOnScroll
) {
  entires.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log(entry.target);
      entry.target.classList.add("title-animation");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
options);

titles.forEach((title) => {
  appearOnScroll.observe(title);
});
