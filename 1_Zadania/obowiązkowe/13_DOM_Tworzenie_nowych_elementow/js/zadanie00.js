document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let deleteBtns = document.querySelectorAll('.deleteBtn');
    console.log(deleteBtns); 

    for(let i = 0; i < deleteBtns.length; i++){
        deleteBtns[i].addEventListener('click', function(e){
            let toDelete = this.parentElement.parentElement;
            console.log(toDelete);
            toDelete.parentElement.removeChild(toDelete);
        })
    }

});