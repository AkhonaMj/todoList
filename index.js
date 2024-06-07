let sortBtn = document.querySelector(".sort");
let addBtn = document.querySelector(".add");
let input = document.querySelector("input");
let body = document.querySelector("body");

addBtn.addEventListener("click", addItem);

function addItem() {
    let inputVal = input.value
    if (inputVal) {
        let capitalInputVal = inputVal.charAt(0).toUpperCase() + inputVal.slice(1)
        let p = document.createElement("p");
        
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let newCheckBox = document.createElement("input");
        newCheckBox.setAttribute("type", "checkbox");
        newCheckBox.classList.add("checkbox"); // Add the 'checkbox' class

      

        li.innerHTML = capitalInputVal;

        li.appendChild(newCheckBox);
        ul.appendChild(li);
        p.appendChild(ul);
        body.appendChild(p);
        input.value = "";
    }
}


