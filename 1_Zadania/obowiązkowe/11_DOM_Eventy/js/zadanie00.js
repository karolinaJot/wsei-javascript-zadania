document.addEventListener("DOMContentLoaded", function () {
     console.log("DOM fully loaded and parsed!"); 
    
    //zadanie 0a
    let parent = document.querySelectorAll('.parent');
    let children = document.querySelectorAll('.children');

    for(let i = 0; i < parent.length; i++){
        parent[i].addEventListener('mouseover', function (e) {
            children[i].style.display = 'block';
        });
    }
    for(let i = 0; i < parent.length; i++){
        parent[i].addEventListener('mouseleave', function (e) {
            children[i].style.display = 'none';
        });
    }

    // 0b
    function hideChildrenElement(e){
        for(let i = 0; i < parent.length; i++){
                children[i].style.display = 'none';
        }
    }

    for(let i = 0; i < parent.length; i++){
        parent[i].addEventListener('mouseleave', hideChildrenElement);
    }

    
    
    });