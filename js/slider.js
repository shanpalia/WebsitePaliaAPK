/* =============================================
   PaliaAPK HUB - slider.js
   Hero Slider
============================================= */

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");

    if (!slides.length) return;

    let current = 0;
    let autoSlide;

    function showSlide(index){

        slides.forEach(slide=>{

            slide.classList.remove("active");

        });

        dots.forEach(dot=>{

            dot.classList.remove("active");

        });

        slides[index].classList.add("active");

        if(dots[index]){

            dots[index].classList.add("active");

        }

        current=index;

    }

    function nextSlide(){

        current++;

        if(current>=slides.length){

            current=0;

        }

        showSlide(current);

    }

    function prevSlide(){

        current--;

        if(current<0){

            current=slides.length-1;

        }

        showSlide(current);

    }

    function startAuto(){

        autoSlide=setInterval(nextSlide,5000);

    }

    function stopAuto(){

        clearInterval(autoSlide);

    }

    nextBtn?.addEventListener("click",()=>{

        stopAuto();

        nextSlide();

        startAuto();

    });

    prevBtn?.addEventListener("click",()=>{

        stopAuto();

        prevSlide();

        startAuto();

    });

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",()=>{

            stopAuto();

            showSlide(index);

            startAuto();

        });

    });

    showSlide(current);

    startAuto();

});
/* =============================================
   Pause Slider on Hover
============================================= */

const heroSlider = document.querySelector(".hero-slider");

if(heroSlider){

    heroSlider.addEventListener("mouseenter",()=>{

        stopAuto();

    });

    heroSlider.addEventListener("mouseleave",()=>{

        startAuto();

    });

}

/* =============================================
   Touch Swipe Support
============================================= */

let touchStartX = 0;
let touchEndX = 0;

if(heroSlider){

    heroSlider.addEventListener("touchstart",(e)=>{

        touchStartX = e.changedTouches[0].screenX;

    });

    heroSlider.addEventListener("touchend",(e)=>{

        touchEndX = e.changedTouches[0].screenX;

        if(touchStartX - touchEndX > 50){

            stopAuto();
            nextSlide();
            startAuto();

        }

        if(touchEndX - touchStartX > 50){

            stopAuto();
            prevSlide();
            startAuto();

        }

    });

}

/* =============================================
   Keyboard Navigation
============================================= */

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        stopAuto();
        nextSlide();
        startAuto();

    }

    if(e.key==="ArrowLeft"){

        stopAuto();
        prevSlide();
        startAuto();

    }

});

/* =============================================
   Pause when Tab Hidden
============================================= */

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        stopAuto();

    }else{

        startAuto();

    }

});
