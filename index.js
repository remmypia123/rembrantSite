//document.getElementById("count-el").innerText = 10
let passenger = 0
let countEl  = document.getElementById("count-el")
let savedCount = document.getElementById("savedCount")
let logs = { }
function increment(){
	passenger += 1 
	countEl.textContent = passenger
}

function save(){
	savedCount.textContent += passenger + " - "
	countEl.textContent = 0
	passenger =0


}