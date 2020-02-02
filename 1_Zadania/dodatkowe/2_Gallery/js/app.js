/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let imgs = document.querySelectorAll('img');
    let body = document.querySelector('body');

    for(let i = 0; i < imgs.length; i++){
        imgs[i].addEventListener('click', function(e){
            imgFullUrl = this.src;
            let newDiv = document.createElement('div');
            newDiv.classList.add('fullScreen');
            let newImg = document.createElement('img');
            newImg.setAttribute('src', imgFullUrl);
            let button = document.createElement('button');
            button.classList.add('close');
            button.innerHTML = 'Close';

            body.appendChild(newDiv);
            newDiv.appendChild(newImg);
            newDiv.appendChild(button);
        });
    }

    let toRemove = document.querySelector('.fullScreen');
    
    button.addEventListener('click', function(e){
        toRemove.parentNode.removeChild(toRemove);
    });
});