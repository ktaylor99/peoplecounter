
let countEl = document.getElementById("count-el")
let count = 0

function increment(){
   count += 1 
   countEl.innerText = count
}

let SaveEl = document.getElementById("save-el")

function save(){
    count += " - "
    SaveEl.innerText += count
}
