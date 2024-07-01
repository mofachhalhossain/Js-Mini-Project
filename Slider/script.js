
let slideIndex = 0;
const sliders = document.querySelectorAll('.slider');
const prev_btn = document.querySelector(".prev-slide");
const next_btn = document.querySelector(".next-slide");


const showSlide = (index) => {
    if(index >= sliders.length){
        slideIndex = 0;
    }else if(index < 0) {
        slideIndex = sliders.length - 1;
    }else{
        slideIndex = index;
    }

    const offset = -slideIndex * 100;
    document.querySelector(".slider-wraper").style.transform = `translateX(${offset}%)`
}

prev_btn.addEventListener("click", ()=>{
    showSlide(slideIndex - 1);
})

next_btn.addEventListener("click", ()=>{
    showSlide(slideIndex + 1)
})