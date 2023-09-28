// ============= SCROLL HEADER =============

let header = document.querySelector(".header");
window.addEventListener("scroll", function(){
    if(this.scrollY > 10){
        header.classList.add("scroll_header")
    }else{
        header.classList.remove("scroll_header")
    }
})

// ============= POPULAR SLIDER HEADER =============

