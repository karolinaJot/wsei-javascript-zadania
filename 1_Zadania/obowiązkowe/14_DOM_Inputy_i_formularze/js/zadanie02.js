document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let select = document.querySelector('select');
    let button = document.querySelector('btn');
    let images = document.querySelectorAll('.page-header img');

    for(let i = 0; i < images.length; i++){
            images[i].style.display = 'none';
        }
    
    select.addEventListener('change', function(e){
        let index = select.selectedIndex;
        for(let i = 0; i < images.length; i++){
            if(i === index){
                images[i].style.display = 'block';
            }else {
                images[i].style.display = 'none';
            }
        }
    });
    
    // for(let i = 0 ; i < options.length; i++){
    //     options[i].addEventListener('change', function(e){
    //         if(this.selected){
    //             console.log(`wybrano ${options[i]}`);
    //             images[i].style.display = 'block';
    //         }
    //     });
    // }
   

});