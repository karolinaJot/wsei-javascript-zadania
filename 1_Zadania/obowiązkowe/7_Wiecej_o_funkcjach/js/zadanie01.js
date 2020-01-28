
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Deklaracja nowej funkcji o nazwie "sortArray", funkcja nie przyjmuje żadnych parametrów.
function sortArray() {

    //Utworzenie w ciele fukncji tablicy o nazwie "points". Tablica składa się z nieposortowanych liczb.
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Na tablicy points jest wywoływana fukncja "sort" - jest to konstrukcja istniejąca w JS (to nie jest autorska metoda)
    //jej celem jest posortowanie tablicy points.
    points.sort(function (a, b) {
        //sortuje i zwraca elementy w tablicy points od najmniejszej do największej
        return a - b;
    });

    //Funkcja sortArray zwraca posortowaną tablicę points. 
    return points;
}

//Wywołanie fukncji sortArray, fukncja posortuje tablicę w niej zadeklarowaną i taką posortowaną tablicę zwróci.

sortArray();
