document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let list = document.querySelector('.menu');
    let btn = document.querySelector('.button');
    
    let listItemNo = 1;
    let counter = 0;
    
    btn.addEventListener('click', function(e){
        let listItem = document.createElement('li');
        listItem.innerHTML = `Element ${listItemNo} - w chwili dodania było ${counter} elementów`;
        list.appendChild(listItem); 
        listItemNo ++;
        counter ++;   
    });

});