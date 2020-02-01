document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let button = document.querySelector('.button');
    // let parent = button.parentElement;
    // console.log(parent); 

    button.addEventListener('click', function(e){
       button.parentElement.removeChild(button);
    });


});