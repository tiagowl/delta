const icon = document.getElementById("icon");
const title = document.getElementById("title");
const text = document.getElementById("inner-text");
const image = document.getElementById("main-photo");
const positionOne = document.getElementById("one");
const positionTwo = document.getElementById("two");
const positionThree = document.getElementById("three");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");

let counter = 0;

const icons = ['img/truck.svg', 'img/truck.svg', 'img/maps-and-location.svg'];
const titles = ['Carousel 1', 'Carousel 2', 'Carousel 3'];
const images = ['img/Retângulo 174.png', 'img/Grupo de máscara 5.png', 'img/photo-1446776811953-b23d57bd21aa.png'];
const buttons = [positionOne, positionTwo, positionThree];

btnRight.addEventListener("click", ()=>{
    image.src = images[counter];
    icon.src = icons[counter];
    title.innerHTML = titles[counter];
    buttons[counter].style.width = "46px";
    buttons[counter].style.backgroundColor = "#FFC502";
    switch(counter){
        case 0:
            buttons[1].style.width = "21px";
            buttons[1].style.backgroundColor = "#000000";
            buttons[2].style.width = "21px";
            buttons[2].style.backgroundColor = "#000000";
            break;
        case 1:
            buttons[0].style.width = "21px";
            buttons[0].style.backgroundColor = "#000000";
            buttons[2].style.width = "21px";
            buttons[2].style.backgroundColor = "#000000";
            break;
        case 2:
            buttons[0].style.width = "21px";
            buttons[0].style.backgroundColor = "#000000";
            buttons[1].style.width = "21px";
            buttons[1].style.backgroundColor = "#000000";
            break;
    }
    counter += 1;
    if(counter > 2){
        counter = 0;
    }
    
});

btnLeft.addEventListener("click", ()=>{
    image.src = images[counter];
    icon.src = icons[counter];
    title.innerHTML = titles[counter];
    buttons[counter].style.width = "46px";
    buttons[counter].style.backgroundColor = "#FFC502";
    switch(counter){
        case 0:
            buttons[1].style.width = "21px";
            buttons[1].style.backgroundColor = "#000000";
            buttons[2].style.width = "21px";
            buttons[2].style.backgroundColor = "#000000";
            break;
        case 1:
            buttons[0].style.width = "21px";
            buttons[0].style.backgroundColor = "#000000";
            buttons[2].style.width = "21px";
            buttons[2].style.backgroundColor = "#000000";
            break;
        case 2:
            buttons[0].style.width = "21px";
            buttons[0].style.backgroundColor = "#000000";
            buttons[1].style.width = "21px";
            buttons[1].style.backgroundColor = "#000000";
            break;
    }
    counter -= 1;
    if(counter < 0){
        counter = 2;
    }
    
});

function showMenu(){
    const menu = document.getElementById("show-menu");
    menu.style.display = "initial";

    const content = document.getElementById("content");
    content.style.filter = "brightness(50%)";
}

function closeMenu(){
    const menu = document.getElementById("show-menu");
    menu.style.display = "none";

    const content = document.getElementById("content");
    content.style.filter = "brightness(100%)";
}


