let scrollContainer = document.querySelector(".image_movie");
let backBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 400; 
});

backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 400; 
});


let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 300; 
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
}

setInterval(() => moveSlide(1), 2000);

// ***************** Dark Mode *******************


const toggle = document.getElementById("toggleDark");
const body = document.querySelector('body');
const sunIcon = document.querySelector('.fa-sun');
const footer = document.querySelector('footer');


const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
    sunIcon.classList.remove('fa-sun');
    sunIcon.classList.add('fa-moon');
    body.style.background = 'black';
    footer.style.color = 'white';
} else {
    sunIcon.classList.remove('fa-moon');
    sunIcon.classList.add('fa-sun');
    body.style.background = '#F0FFB5';
    footer.style.color = 'black';
    footer.style.borderColor = 'white';
}

toggle.addEventListener('click', () => {
    sunIcon.classList.toggle('fa-sun');
    sunIcon.classList.toggle('fa-moon');

    if (sunIcon.classList.contains("fa-moon")) {
        localStorage.setItem('mode', 'dark');
        body.style.background = 'black';
        footer.style.color = 'white';
    } else {
        localStorage.setItem('mode', 'light'); 
        body.style.background = '#F0FFB5';
        footer.style.color = 'black';
        footer.style.borderColor = 'white';
    }
    body.style.transition = 'background 2s, color 1.5s';
});


// ************************************ Searching **************************************


const inputSearch = document.getElementById("search");
const containerMovie = document.querySelector(".container_list_movie");
const cards = document.querySelectorAll(".card_movie");

inputSearch.addEventListener("keyup", () => {
    const searchValue = inputSearch.value.toUpperCase();

    cards.forEach((card) => {
        const titleMovie = card.querySelector(".info_movie h3");
        if (titleMovie.innerHTML.toUpperCase().indexOf(searchValue) >= 0) {
            card.style.display = ""; 
        } else {
            card.style.display = "none"; 
        }
    });
});



// ***** Saving Movie Selections *****




const saveIcons = document.querySelectorAll(".save_icon");
const cardMovies = document.querySelectorAll(".card_movie"); 

if (!localStorage.getItem("myDivContent")) {
    localStorage.setItem("myDivContent", JSON.stringify({ name: [] }));
}

let theObject = JSON.parse(localStorage.getItem("myDivContent"));

saveIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        const myContentDiv = cardMovies[index].innerHTML; 
        theObject.name.push(myContentDiv);
        localStorage.setItem("myDivContent", JSON.stringify(theObject));
        alert('Saved!');
    });
});




cardMovies.forEach(card => {
    card.addEventListener("click", () => {
        location.href = "http://127.0.0.1:5501/detail.html"; 
    });
});
