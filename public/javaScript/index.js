const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const progresses = document.querySelectorAll(".progress-done");
const aboutTitle = document.querySelector("h2");

//Title
setTimeout(() => {
  aboutTitle.classList.add("animate__animated", "animate__flipInX");
}, 500);
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
function initMap() {
  // The location of Uluru
  const uluru = { lat: 40.008, lng: 28.641 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
