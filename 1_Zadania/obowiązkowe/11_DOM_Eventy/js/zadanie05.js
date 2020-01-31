document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let boxes = document.querySelectorAll('.box');

    for(let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('click', function(e){
            this.style.backgroundColor = 'pink';
        });
    }


});