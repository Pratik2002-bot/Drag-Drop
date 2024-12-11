let lists = document.getElementsByClassName("list");
const rightbox = document.querySelector("#right");
const leftbox = document.querySelector("#left");

let selected = null;

for (let list of lists) {
    list.addEventListener("dragstart",function (e){
        selected = e.target;
    });
}

rightbox.addEventListener("dragover",function (e){
    e.preventDefault();
});

rightbox.addEventListener("drop",function (e){
    if (selected){
        rightbox.appendChild(selected);
        selected = null;
    }
});
leftbox.addEventListener("dragover",function (e){
    e.preventDefault();
});
leftbox.addEventListener("drop",function (e){
    if (selected){
        leftbox.appendChild(selected);
        selected=null
    }
});
