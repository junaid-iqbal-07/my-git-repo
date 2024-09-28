
const listItem = document.querySelector("ul");
// console.log(listItem);

const sideBtn = document.querySelector("#side-btn");
//  console.log(sideBtn)

const crossBTN = document.querySelector("#cross-btn");


for (let i = 0; i < 1; i++) {
     
    sideBtn.addEventListener("click" , () =>{
        listItem.style.display = "flex"
    })
     
     crossBTN.addEventListener("click" , () =>{
        listItem.style.display = "none"
    })
    
}