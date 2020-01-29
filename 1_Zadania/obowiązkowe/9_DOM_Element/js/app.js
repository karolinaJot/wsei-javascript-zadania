document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     // zadanie 0
     function getDatasInfo(elements){
         const linksArray = [];
         for(let i = 0; i < elements.length; i++){
            linksArray.push(elements[i].dataset.color);
        }
        return linksArray;
     }

    //  console.log(getDatasInfo(links));

    // zadanie 1
    console.log(homeElement);
    console.log(childElements); //HTMLCollections
    console.log(banner);
    console.log(blocks);        //NodeList
    console.log(links);         //HTMLCollections

    for(let i = 0; i < childElements.length; i++){
        console.log(childElements[i].tagName, childElements[i].className);
    }

    for(let i = 0; i < blocks.length; i++){
        console.log(blocks[i].tagName, blocks[i].className);
    }

    // blocks.forEach(block => {
    //     console.log(block.tagName, block.className);
    // });
   

    for(let i = 0; i < links.length; i++){
        console.log(links[i].tagName, links[i].className);
    }

    // zadanie 2
    for(let i = 0; i < blocks.length; i++){
        console.log(blocks[i].innerHTML, blocks[i].outerHTML);
    }
    // innerHTML zwraca to co znajduje się wewnątrz wybranego elementu (czyli elementy, które są w nim zagnieżdżone :)
    //outerHTML zwraca cały element wraz z jego wnętrzem 

    for(let i = 0; i < blocks.length; i++){
        blocks[i].innerHTML = '<div> Nowa wartość diva o klasie blocks </div>';
    }

    // zadanie 3
    

    
});
