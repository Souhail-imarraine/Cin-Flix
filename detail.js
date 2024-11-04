
const toggle = document.getElementById("toggleDark");
const body = document.querySelector('body');
const sunIcon = document.querySelector('.fa-sun');
const footer = document.querySelector('footer');

// Check saved mode on page load
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

// Toggle dark mode
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


/**start */


const starts = document.querySelectorAll(".starts i");

starts.forEach((star, index1) => { 
    star.addEventListener("click", () => {
        starts.forEach((star, index2) =>{
            if(index1 >= index2){
                star.classList.add("active");
                localStorage.setItem('start', 'dark');
                star.style.color = "yellow";
            }else {
                star.classList.remove("active");
                star.style.color = "";
            }
        });
    });
});


/*************************like  ****************/

const like = document.querySelector(".likes");
if (like){
    let compteur = 0;
    like.addEventListener("click", () => {
            compteur++;
            document.getElementById("like").innerHTML = compteur;
            like.style.color = "red";
    });

}





const btn_comments = document.querySelector("#btn_comments");
let textearea = document.querySelector("textarea");
let comment ;


btn_comments.addEventListener("click", () => {
    if (textearea.value !== ""){
        comment = textearea.value;
        let commentsDiv = `
            <div class="commentair_part">
               <div class="image_comment">
                    <img src="images/téléchargement.jpg" alt="">
               </div> 
               <div>
                    <p>Souhail imarraine</p>
                    <hr>
                    <div class="start ">
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
               </div>
               <div class="div_commentair">
                    <p id="comment">${comment}</p>
               </div>
            </div>
        `

        document.querySelector(".container_ajoute_comment").innerHTML+= commentsDiv;
    }
    textearea.value = "" ;
});

