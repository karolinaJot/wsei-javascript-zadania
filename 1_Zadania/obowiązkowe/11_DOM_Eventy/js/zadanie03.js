document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 



    let buttons = document.querySelectorAll('button');
    let counters = document.querySelectorAll('.counter');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(e) {
            let oldValue = counters[i].innerHTML;
            oldValue++;
            counters[i].innerHTML = oldValue;
        });
    }


});