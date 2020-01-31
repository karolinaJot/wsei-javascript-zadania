document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

let button = document.getElementById('mainBtn');

button.addEventListener('click', function (e){
    console.log('Hura! Działa!');
});

});