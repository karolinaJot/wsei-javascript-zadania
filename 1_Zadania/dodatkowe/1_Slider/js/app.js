document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let prev = document.getElementById('prevPicture');
    let next = document.getElementById('nextPicture');
    let elements = document.querySelectorAll('li');

    let index = 0;

    elements[index].classList.add('visible');

    next.addEventListener('click', function(e){
        elements[index].classList.remove('visible');
        index++;
        if(index >= elements.length){
            index = 0;
        }
        elements[index].classList.add('visible');
    });

    prev.addEventListener('click', function(e){
        elements[index].classList.remove('visible');
        index--;
        if(index < 0){
            index = elements.length -1;
        }
        elements[index].classList.add('visible');
    });

});