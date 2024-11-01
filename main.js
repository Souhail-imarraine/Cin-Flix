let scrollContainer = document.querySelector(".image_movie");
let BackBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");


nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 1500;
});

BackBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 1500;
});




const starts = document.querySelectorAll(".starts i");

starts.forEach((star, index1) => { 
    star.addEventListener("click", () => {
        starts.forEach((star, index2) =>{
            if(index1 >= index2){
                star.classList.add("active");
                star.style.color = "yellow";
            }else {
                star.classList.remove("active");
                star.style.color = "";
            }
        });
    });
});



// ***************** dark moode *******************

    // const iconDark = document.getElementById("toggleDark");
    // const sunicon = document.querySelector(".fa-sun");
    // const body = document.querySelector("body");

    // iconDark.addEventListener("click", () => {
    //     sunicon.classList.iconDark("fa-moon");
    //     body.style.background = 'black';

    //     if(sunicon.classList.contains(".fa-sun")){
    //         sunicon.classList.contains(".fa-moon");

    //     }
        
    // });


const toggle = document.getElementById("toggleDark");
const body = document.querySelector('body');
const sunIcon = document.querySelector('.fa-sun');
const footer = document.querySelector('footer');


toggle.addEventListener('click', () => {
    sunIcon.classList.toggle('fa-sun');
    sunIcon.classList.toggle('fa-moon');

    if (sunIcon.classList.contains("fa-moon")) {
        localStorage.setItem('mode', 'dark'); // حفظ الوضع المظلم
        body.style.background = 'black';
        footer.style.color = 'white';
        footer.style.borderColor = 'white';
    } else {
        localStorage.setItem('mode', 'light'); // حفظ الوضع الفاتح
        body.style.background = '#F0FFB5';
        footer.style.color = 'black';
        footer.style.borderColor = 'white';
    }
    body.style.transition = 'background 2s, color 1.5s';
});



// ************************************ searching **************************************


// const inputSearch = document.getElementById("search");
// const card = document.querySelectorAll("card_movie");
// console.log(card);

// inputSearch.addEventListener("onkeyup", (e) => {
//     if()
// });




/*************************like  ****************/

const like = document.querySelector(".likes");
let compteur = 0;
like.addEventListener("click", () => {
        compteur++;
        document.getElementById("like").innerHTML = compteur;
        like.style.color = "red";
});