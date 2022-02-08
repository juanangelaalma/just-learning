const btnMenu = document.getElementById("btn-menu")
const navDropdown = document.getElementById("navbarNavDropdown")

let isOpenDropdown = false;

btnMenu.addEventListener("click", function() {
  console.log("clicked")
  if(!isOpenDropdown) {
    navDropdown.classList.add("show")
    isOpenDropdown = true
  }else {
    navDropdown.classList.remove("show")
    isOpenDropdown = false
  }
})