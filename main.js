let scrollContainer = document.querySelector(".image_movie");
let BackBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });


nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 1500;
});

BackBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 1500;
});