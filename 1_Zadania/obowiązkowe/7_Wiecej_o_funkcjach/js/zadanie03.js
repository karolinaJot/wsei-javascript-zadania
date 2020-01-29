//Wywołanie fukncji sayCzesc() po jej definicji oraz przed jej
// definicją powoduje prawidłowe wykonanie fukncji. Zachodzi tutaj zjawisko hoistingu.

sayCzesc();
function sayCzesc(){
    console.log('Cześć!');
}


//Fukncja, która powstała jako wyrażenie funkcyjne nie może być wywołana
//przed jej inicjalizacją. Kolejność, która jest poniżej spowoduje wystąpienie błędu.
//Dla wyrażeń funkcyjnych nie działa zjawisko hoistingu

hello();
let hello = function(){
    console.log('Hello!');
}

