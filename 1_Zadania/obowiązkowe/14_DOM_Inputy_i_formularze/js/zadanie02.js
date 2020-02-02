document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let select = document.querySelector('select');
    let options = document.querySelectorAll('option');
    let images = document.querySelectorAll('.page-header img');

    function ClearImgs(allImgs){
        for(let i = 0; i < images.length; i++){
            images[i].style.display = 'none';
        }
    }

    ClearImgs(images);

    images[2].style.display = 'block';
    
    select.addEventListener('change', function(e){
        ClearImgs(images);
        for(let i = 0; i < options.length; i ++){
            if(options[i].selected){
                if(options[i].innerHTML === 'Windows'){
                    images[2].style.display = 'block';
                } else if(options[i].innerHTML === 'Os X'){
                    images[0].style.display = 'block';
                } else if(options[i].innerHTML === 'Ubuntu'){
                    images[1].style.display = 'block';
                }
            }
        }
    });
});