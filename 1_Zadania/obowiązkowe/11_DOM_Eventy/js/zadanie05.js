document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let boxes = document.querySelectorAll('.box');

    for(let i = 0; i < boxes.length; i++){
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        boxes[i].addEventListener('click', function(e){
            this.style.backgroundColor = randomColor;
        });
    }


});