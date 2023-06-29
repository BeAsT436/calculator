const btns = document.querySelectorAll(".btn")
const result = document.querySelector(".result")
const equal = document.querySelector(".equal")
const reset = document.querySelector(".reset")

equal.addEventListener("click", ()=>{
    result.textContent = eval(result.textContent)
})
reset.addEventListener("click", ()=>{
    result.textContent = 0
})
btns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        if(e.target.dataset.value){
            result.textContent += e.target.dataset.value
        }
    })
})