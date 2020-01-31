document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    const box = document.getElementById('box');
    const globalX = document.getElementById('globalX');
    const globalY = document.getElementById('globalY');
    const localX = document.getElementById('localX');
    const localY = document.getElementById('localY');

    function OnMouseMove(e){
        let globalPosX = e.clientX;
        let globalPosY = e.clientY;
        let localPosX = e.clientX - this.offsetLeft;
        let localPosY = e.clientY - this.offsetTop;

        globalX.innerHTML = globalPosX;
        globalY.innerHTML = globalPosY;
        localX.innerHTML = localPosX;
        localY.innerHTML = localPosY;
    }
    
    box.addEventListener('mousemove', OnMouseMove);
    
 
});