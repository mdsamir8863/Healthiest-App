const toggleButton = document.getElementById("toggleButton");
const moreImgDiv = document.querySelectorAll(".moreImgDiv");

toggleButton.addEventListener("click", function () {
  moreImgDiv.forEach((item) => {
    if (item.style.display === "none") {
      item.style.display = "block";
      toggleButton.textContent = "see less";
    } else {
      item.style.display = "none"; 
      toggleButton.textContent = "see more";
    }
  });
});
