document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let team1 = document.getElementById('team1');
    let points1 = document.getElementById('points1');
    let team2 = document.getElementById('team2');
    let points2 = document.getElementById('points2');
    let form = document.querySelector('form');
    let table = document.querySelector('.container table tbody');
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        let newTr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        
        td1.innerHTML = team1.value;
        if(team1.value !== team2.value){
            td2.innerHTML = team2.value;
        }else {
            td2.innerHTML = 'Drużyna 2';
        }

        if(points1.value >= 0 && points2.value >= 0){
            td3.innerHTML = `${points1.value} - ${points2.value}`;
        }else {
            td3.innerHTML = 'Błędne wartości!';
        }

        newTr.appendChild(td1);
        newTr.appendChild(td2);
        newTr.appendChild(td3);
        table.appendChild(newTr);
    });
});