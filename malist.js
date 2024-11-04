// dark mode
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



// malist

let maliste = document.querySelector(".container_malist");

function populateList() {
    const saveCardMovie = JSON.parse(localStorage.getItem("myDivContent") || '{"name":[]}');

    maliste.innerHTML = ""; 

    if (saveCardMovie.name.length > 0) {
        saveCardMovie.name.forEach((nom, index) => {
            var div = document.createElement('div');
            div.style.display = "flex";
            div.style.flexDirection = "column";
            div.style.justifyContent = "space-between";
            div.style.margin = "10px";

            var par1 = `<div style="display:flex;">${nom}</div>`;
            var btn = `<button style="height:40px; width: 130px; background-color:yellow; margin-left: 10px; cursor: pointer; border-radius:10px;" class="btn_sup" data-index="${index}">Supprimer</button>`;
            
            div.innerHTML += par1;
            div.innerHTML += btn;
            maliste.appendChild(div);
        });

        document.querySelectorAll(".btn_sup").forEach(button => {
            button.addEventListener("click", () => {
                const index = button.getAttribute("data-index");

                saveCardMovie.name.splice(index, 1);

                localStorage.setItem("myDivContent", JSON.stringify(saveCardMovie));

                populateList(); 
            });
        });
    }
}

window.addEventListener("load", populateList);



