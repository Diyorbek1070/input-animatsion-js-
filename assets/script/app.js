const inputEl = document.querySelector(".input");
const spanEl = document.querySelector(".span");
const listEl = document.querySelector(".list");

inputEl.addEventListener("mouseover",()=>{
    if(spanEl.style.top == "18px"){
        spanEl.style.top = "-15px"
        spanEl.classList.add("span-border");
     }
     else {
        spanEl.style.top = "18px"
        spanEl.classList.remove("span-border");
    } 
})


