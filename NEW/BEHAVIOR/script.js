
const slides=document.querySelector(".slider").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const current=document.querySelector(".current");
let index=0;

    prev.addEventListener("click",function(){
        prevSlide();
        updateSlide();
        resetTimer();
    })

    next.addEventListener("click",function(){
        nextSlide();
        updateSlide();
        resetTimer();
    })

    function stepSlide(){
        for (let i=0; i<slides.length; i++){
            const div=document.createElement("div");
            div.innerHTML=i+1;
            div.setAttribute("onclick","indicateSlide(this)")
            div.id=i;
            if(i==0){
                div.className="active";
            }
            current.appendChild(div);
        }
    }

    stepSlide();

    function indicateSlide(element){
        index=element.id;
        changeSlide();
        updateSlide();
        resetTimer();
    }

    function updateSlide(){
        for(let i=0; i<current.children.length; i++){
            current.children[i].classList.remove("active");
        }

        current.children[index].classList.add("active");
    }

    function prevSlide(){
        if (index==0){
            index=slides.length-1;
        } else {
            index--;
        }
        changeSlide();
    }

    function nextSlide(){
        if (index==slides.length-1){
            index=0;
        } else {
            index++;
        }
        changeSlide();
    }

    function changeSlide() {
        for(let i=0; i<slides.length; i++){
            slides[i].classList.remove("active");
        }

        slides[index].classList.add("active");
    }

    function resetTimer(){
        clearInterval(timer);
        timer=setInterval(autoSlide,4000);
    }

    function autoSlide(){
        nextSlide();
        updateSlide();
    }

 let timer=setInterval(autoSlide,4000);


