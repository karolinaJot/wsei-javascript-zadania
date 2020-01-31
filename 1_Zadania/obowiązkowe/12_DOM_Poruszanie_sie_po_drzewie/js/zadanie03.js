document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 
    
    let listContainers = document.querySelectorAll('.listContainer');  

    for(let i = 0; i < listContainers.length; i++){
        listContainers[i].addEventListener('mouseover', function(e){
            this.firstElementChild.firstElementChild.style.backgroundColor = 'red';
            this.firstElementChild.lastElementChild.style.backgroundColor = 'blue';
            let allChildren = this.firstElementChild.children; 
            
            for(let i = 1; i < allChildren.length -1; i++){
                allChildren[i].style.backgroundColor = 'green';
            }
        });
    }

});