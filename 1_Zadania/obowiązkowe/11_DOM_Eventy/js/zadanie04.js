document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let buttons = document.querySelectorAll('button');
    let counter = document.querySelector('.counter');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(e) {
            let oldValue = counter.innerHTML;
            oldValue++;
            counter.innerHTML = oldValue;
        });
    }
});