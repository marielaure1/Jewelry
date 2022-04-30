const tools = document.querySelectorAll(".point")
const descriptions = document.querySelectorAll(".description")
const jewel = document.querySelector(".jewel")




function point(){
    if (window.matchMedia("(max-width: 768px)").matches) {
    } else {
        tools.forEach((tool, i) => {
            tool.addEventListener("click", () => {
                for(let i = 0; i < 5; i++){
                    tools[i].classList.remove("active")
                    descriptions[i].classList.remove("active")
                }
                tool.classList.add("active")
                descriptions[i].classList.add("active")
            })
        });
    }
}

point()