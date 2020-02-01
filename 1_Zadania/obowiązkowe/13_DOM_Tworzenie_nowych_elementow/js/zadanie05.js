document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let moveButtons = document.querySelectorAll('.moveBtn');
    let ul1 = document.querySelector('ul');
    let ul1Id = ul1.id;
    let ul2 = document.getElementById('list2');

    for(let i = 0; i < moveButtons.length; i ++){
        moveButtons[i].addEventListener('click', function(e){
            let newLi = document.createElement('li');
            newLi = this.parentElement; 
            if(newLi.parentElement.id !== ul1Id){
                ul1.appendChild(newLi);
            } else {
                ul2.appendChild(newLi);
            }
        });
    }
});