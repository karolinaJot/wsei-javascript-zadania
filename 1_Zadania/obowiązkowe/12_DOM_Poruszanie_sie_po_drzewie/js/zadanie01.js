document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let buttons = document.querySelectorAll('.button');
    console.log(buttons);

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(e){
            if(this.nextElementSibling === 'null'){
                return;
            }
            this.nextElementSibling.classList.toggle('hidden');
        })
    }
});