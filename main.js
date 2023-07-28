let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let input = document.querySelector("input");
    let ori = input.value;

    if (ori.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = ori;
        ul.appendChild(li);
        input.value = "";

        
        li.appendChild(addDeletBtn())
        ul.appendChild(li);
    }

})




function addDeletBtn() {
    let deleteBtn =document.createElement("button");
    deleteBtn.textContent="x"


    deleteBtn.addEventListener("click", (e) =>{
        let item= e.target.parentElement;
        ul.removeChild(item)
    })

    return deleteBtn;

}


function addAddBtn() {

    let addBtn =document.createElement("button");
    addBtn.textContent="+"
    
    addBtn.addEventListener("click", (e) =>{
        let item= e.target.parentElement;
        input.removeChild(item)
    })

    return addBtn;

}