// all contact get here now
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// get all buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");



// set starting item

let itemNumber = 0;


// window load 
window.addEventListener("DOMContentLoaded", function(){
    // show item for loaded here
    showItem(itemNumber);
});

// create a show person based on item
function showItem(person){
    const item = testimonial[person];

    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}


// next button to change All Element Here now
prevBtn.addEventListener("click", function(){
    itemNumber++;
    if(itemNumber > testimonial.length - 1){
        itemNumber = 0;
    }

    showItem(itemNumber);
});


// next button to change All Element Here now
nextBtn.addEventListener("click", function(){
    itemNumber--;

    if( itemNumber < 0 ){
        itemNumber = testimonial.length - 1;
    }

    showItem(itemNumber);
});