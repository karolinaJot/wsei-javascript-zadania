document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    
     //zadanie 0
     let itemsList = document.querySelectorAll('.ex5 li');
     console.log(itemsList);

     
    //  for(let i = 0; i < itemsList.length; i++){
    //      itemsList[i].style.textDecoration = 'none';
    //  }

     for(let i = 0; i < itemsList.length; i ++){
        if(i % 2 === 0){ 
        itemsList[i].style.backgroundColor = 'green';
        }
        if(i % 3 === 0){
            itemsList[i].style.textDecoration = 'underline';
        }
        if(i === 4){
            itemsList[i].classList.add('big');
        }
     }

     // zadanie 1

     //JS pracuje na załadowanym już pliku html i modyfikuje go dynamicznie dlatego wszelkie
     //zmiany widoczne są w narzędziach developerskich a nie w pierwotnym pliku html

     let chrome = document.querySelector('.chrome');
     let edge = document.querySelector('.edge');
     let firefox = document.querySelector('.firefox');
     console.log(firefox);

     edge.style.backgroundImage = 'url(./assets/img/edge.png)'
     firefox.style.backgroundImage = 'url(./assets/img/firefox.png)';

    chrome.nextElementSibling.setAttribute('href', 'https://www.google.com');
    chrome.nextElementSibling.innerText = 'Chrome';
    
    edge.nextElementSibling.setAttribute('href', 'https://www.microsoft.com/en-us/edge');
    
    firefox.nextElementSibling.setAttribute('href', 'https://www.mozilla.org/pl/firefox');
    firefox.nextElementSibling.innerText = 'Firefox';

    chrome.style.width = '100px';


    // zadanie 2
    let name = document.getElementById('name');
    let color = document.getElementById('fav_color');
    let meal  = document.getElementById('fav_meal');

    name.innerHTML= 'Karolina';
    color.innerHTML = 'czerwony';
    meal.innerHTML = 'owsianka';

    // zadanie 3
    let ul = document.querySelector('.ex3 ul');
    ul.classList.add('menu');

    let items = ul.querySelectorAll('li');
    for(let i = 0; i < items.length; i++){
        items[i].classList.add('menuElement');
    }
    for(let i = 0; i < items.length; i++){
        items[i].classList.remove('error');
    }

    // zadanie 4
    let ex4Items = document.querySelectorAll('.ex4 li');
    // console.log(ex4Items);
    for(let i = 0; i <= ex4Items.length; i ++){
        ex4Items[i].dataset.id = i + 1; 
    }




});