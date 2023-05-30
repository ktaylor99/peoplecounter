
let countEl = document.getElementById("count-el")
let SaveEl = document.getElementById("save-el")

let count = 0

function increment(){
   count += 1 
   countEl.innerText = count
}

function save(){
    let peopleCount = count + " - "
    SaveEl.textContent += peopleCount
    count = 0
    countEl.innerText = count
}
