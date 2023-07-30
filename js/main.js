const btns = document.querySelectorAll(".btn")
const result = document.querySelector(".result")
const equal = document.querySelector(".equal")
const reset = document.querySelector(".reset")

function calculate(expression) {
    try {
    const regex = /[^0-9+\-*/.]/g
    if(regex.test(expression)){
        throw new Error("Invalid characters")
    }
    return Function(`"use strict";return (${expression});`)()
    } catch (error) {
        console.error("Error calculating",error)
        return "Error"
    }
}

equal.addEventListener("click", ()=>{
    result.textContent = calculate(result.textContent)
})
reset.addEventListener("click", ()=>{
    result.textContent = ""
})
btns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        if(e.target.dataset.value){
            result.textContent += e.target.dataset.value
        }
    })
})