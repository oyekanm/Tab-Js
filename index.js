const links = document.querySelectorAll(".Navigation__link");
const home = document.getElementById("home");
const school = document.getElementById("school");
const church = document.getElementById("church");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    const attr = e.currentTarget.getAttribute("href").slice(1);
    const id = document.getElementById(attr);

    console.log(id);
    e.preventDefault();

    if (id === home) {
      home.classList.add("active");
      school.classList.remove("active");
      church.classList.remove("active");
    }
    if (id === school) {
      school.classList.add("active");
      home.classList.remove("active");
      church.classList.remove("active");
    }
    if (id === church) {
      church.classList.add("active");
      school.classList.remove("active");
      home.classList.remove("active");
    }
  });
});
