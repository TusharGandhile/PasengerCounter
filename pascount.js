let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;
function increment(){
count +=  1;
countEl.innerText=count;
}

//let prevEl = document.getElementById("prev-el");
//prevEl.innerText = "previous count:" + count ;

let saveEl = document.getElementById("save-el");
 console.log(saveEl);

 function save(){
     saveEl.textContent += count + " - " ;
     document.getElementById("count-el").innerText = 0;
 }
