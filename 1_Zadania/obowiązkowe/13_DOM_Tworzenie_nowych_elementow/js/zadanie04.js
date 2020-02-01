document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let button = document.querySelector('.button');
    let list = document.querySelectorAll('li');
    // console.log(list);

    button.addEventListener('click', function(e){
        for(let i = 0; i < list.length; i++){
            list[i].parentElement.removeChild(list[i]);
        }
    });


});