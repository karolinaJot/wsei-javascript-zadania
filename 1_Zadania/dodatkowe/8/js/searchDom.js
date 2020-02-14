
//punkt 1
let menu = document.getElementById('menu');

function getDataInfo(element){
    const dataInfo = []
    dataInfo.push(element.children[0].dataset.info);
    dataInfo.push(element.children[1].dataset.info);
    dataInfo.push(element.children[2].dataset.info);
    
    return dataInfo;
}

console.log(getDataInfo(menu));

//punkt 2
let mainContener = document.getElementById('main-contener');

function getElementClass(element){
    return element.classList;
}

console.log(getElementClass(mainContener));

//punkt 3
let pinkColor = document.querySelector('.pink-color');

function getElementText(element){
    return element.innerHTML;
}

console.log(getElementText(pinkColor));

//punkt 4
let img = document.querySelectorAll('.images');
function getElementAlt(element){
    const elementAlt = [];
    for(let i = 0; i < element.length; i++){
        elementAlt.push(element[i].getAttribute('alt'));
    }
    return elementAlt;
}

console.log(getElementAlt(img));

//punkt 5
let links = document.querySelectorAll('.my-link');
function getElementHref(element){
    const elementLink = [];
    for(let i = 0; i < element.length; i++){
        elementLink.push(element[i].getAttribute('href'));
    }
    return elementLink;
}

console.log(getElementHref(links));



