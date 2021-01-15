// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".slider");
//   var instances = M.Slider.init(elems, {
//     indicators: true,
//     height: 300,
//   });
//
//   document.getElementById("default_tab").idName = "";
// });
document.getElementById("default_tab").click();
function openDesignation(evt, designationName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("designation_tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(designationName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("hamburger").addEventListener("click", (e) => {
  document.getElementById("responsive_nav").classList.toggle("hidden");
});
document.getElementById("res_click").addEventListener("click", (e) => {
  document.getElementById("responsive_nav").classList.toggle("hidden");
});
