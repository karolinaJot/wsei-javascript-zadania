document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 
     
    let width = document.getElementById('windowWidth');
    let height = document.getElementById('windowHeight');
    let window = document.defaultView;
    console.log(window);

    window.addEventListener('resize', function (){
        width.innerHTML = this.innerWidth;
        height.innerHTML = this.innerHeight;
    });



});