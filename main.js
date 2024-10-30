let scrollContainer = document.querySelector(".image_movie");
let BackBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");


nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 1500;
});

BackBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 1500;
});


// *****************8 dark moode ** 


const toggle = document.getElementById("toggleDark");
const body = document.querySelector('body');
const sunIcon = document.querySelector('.fa-sun');
const footer = document.querySelector('footer');

// دالة لتحديث الوضع بناءً على القيمة من localStorage
function updateMode() {
    const currentMode = localStorage.getItem('mode');
    if (currentMode === 'dark') {
        sunIcon.classList.remove('fa-sun');
        sunIcon.classList.add('fa-moon');
        body.style.background = 'black';
        footer.style.color = 'white';
        footer.style.borderColor = 'white';
    } else {
        sunIcon.classList.remove('fa-moon');
        sunIcon.classList.add('fa-sun');
        body.style.background = '#F0FFB5';
        footer.style.color = 'black';
        footer.style.borderColor = 'black';
    }
    body.style.transition = 'background 2s, color 1.5s';
}

updateMode();

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
        footer.style.borderColor = 'black';
    }
    body.style.transition = 'background 2s, color 1.5s';
});



// ************************************ searching **************************************


const searchInput = document.getElementById('search');
const searchButton = document.getElementById('btn_search');
const movieContainers = document.querySelectorAll('.card_movie');

searchButton.addEventListener("click", function() {
    const searchValue = searchInput.value.toLowerCase(); 
    movieContainers.forEach(movie => {
        const title = movie.querySelector('h3').innerText.toLowerCase(); 
        if (title.includes(searchValue)) {
            movie.style.display = 'block'; 
        } else {
            movie.style.display = 'none';
        }
    });
});

