// script start
const slides = document.querySelector('.slides');
let currentSlideIndex = 0;
const prevBtn = document.getElementById('prev');
prevBtn.disabled = true;
prevBtn.addEventListener('click',()=>{
    currentSlideIndex--;
    if(currentSlideIndex === 0){
        prevBtn.style.cursor='no-drop';
        prevBtn.disabled = true;
        prevBtn.classList.add('disable');
    }
    if(currentSlideIndex < 2){
        nextBtn.style.cursor='pointer';
        nextBtn.disabled = false;
        nextBtn.classList.remove('disable');
    }
    if(currentSlideIndex>=0){
        slides.style.transform = `translateX(${ - currentSlideIndex * 100/slides.children.length}%)`;
    }else{
        currentSlideIndex=0;
        console.log('baraka');
    }
})

const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click',()=>{
    currentSlideIndex++;
    prevBtn.style.cursor='pointer';
    prevBtn.disabled = false;
    prevBtn.classList.remove('disable');
    if(currentSlideIndex === 2){
        nextBtn.style.cursor='no-drop';
        nextBtn.disabled = true;
        nextBtn.classList.add('disable');
    }
    if(currentSlideIndex <= slides.children.length - 1){
        slides.style.transform = `translateX(${ - currentSlideIndex * 100/slides.children.length}%)`;
    }else{
        console.log('baraka');
        currentSlideIndex=slides.children.length - 1;
    }
})
// script end