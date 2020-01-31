document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

var menu = document.querySelector("#menu");
var paragraf = document.querySelector("p");

menu.classList.add("menu");
paragraf.innerHTML = "A to jest paragraf w zadaniu 1";

// 1
//Wystąpił błąd. Strona html nie została do końca wczytana, a js już chciał pobrać element
//Plik html wczytuje się po kolei, przeniesienie scriptu do <head>, powoduje próbę wczytania JS
//właśnie w tym miescu. Stąd błąd.

// 2
// Tak. stworzny event sprawdza, czy DOM został już wczytany, JS "czeka" aż html zostanie wczytany.

// 3 Brak różnicy. 

});