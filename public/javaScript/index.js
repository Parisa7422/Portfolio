const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const progresses = document.querySelectorAll(".progress-done");
const titles = document.querySelectorAll("h2");
const progress = document.querySelectorAll(".progress");
const email = document.getElementById("email_id");

//Navbar
// menuIcon.addEventListener("click", function () {
//   navbar.classList.toggle("change");
// });

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const istanbul = { lat: 41.006, lng: 28.657 };
  // The map, centered at Istanbul
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: istanbul,
  });
  // The marker, positioned at Istanbul
  const marker = new google.maps.Marker({
    position: istanbul,
    map: map,
  });
}

window.initMap = initMap;

//Intersection Observer
//Titles loaded on scroll
const options = {
  threshold: 0,
  rootMargin: "-100px",
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

//ProgressBar loading on scroll
const appearProgressbarOnScroll = new IntersectionObserver(function (
  entires,
  appearProgressbarOnScroll
) {
  entires.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log(entry.target);
      entry.target.style.opacity = 1;
      entry.target.style.width = entry.target.getAttribute("data-done") + "%";
      appearProgressbarOnScroll.unobserve(entry.target);
    }
  });
},
options);

progresses.forEach((progress) => {
  appearProgressbarOnScroll.observe(progress);
});

//Send Email Function
function SendMail() {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_5c79r6l", "template_qf9jlok", params).then(
    function (response) {
      alert("SUCCESS!", response.status, response.text);
    },
    function (error) {
      alert("FAILED...", error);
    }
  );
}
