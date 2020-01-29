document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    //zadanie 0
    let title = document.querySelector('.title');
    // console.log(title);
    function getDataAnimation(element){
        let dataAnimationValue = element.dataset.animation;
        return dataAnimationValue; 
    }

    console.log(getDataAnimation(title));

    //zadanie 1
    let home1 = document.getElementById('home');
    let home2 = document.querySelector('#home');
    // console.log(home2);

    let dataDirection = document.querySelector('li');
    // console.log(dataDirection);

    let block = document.querySelector('.block');
    // console.log(block);

    //zadanie 2
    let navigation = document.querySelectorAll('nav li');
    // console.log(navigation);
    let allParaghraps = document.querySelectorAll('div p');
    // console.log(allParaghraps);
    let articleDivs = document.querySelectorAll('article div');
    // console.log(articleDivs);

    //zadanie 3
    let firstArticle = document.querySelector('article, .first');
    // console.log(firstArticle);

    //W pkt 2 mowa o h1 ale w pliku html w wyszukanym elemencie nie ma h1, są natomiast h2,
    //dlatego zamiast h1 z polecenia, wyszukuję h2 - bo ma to sens.
    let h2 = firstArticle.querySelectorAll('h2');
    console.log(h2.length);

    

});
