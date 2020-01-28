/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Tutaj tworzymy funkcję, używamy do tego "function", następnie 
//podajemy nazwę fukncji, tj. "jeden", funkcja nie przyjmuje żadnych parametrów
//dlatego nawiasy okrągłe są puste. Nawias klamrowy otwiera miejsce, w którym zostanie wpisane ciało funkcji,
//czyli to co ta fukncja ma robić
function jeden() {

    //następuje deklaracja zmienne, następnie nazwa zmiennej "zmienna1"
    // i na koniec przypisanie wartości do zadeklarowanej zmiennej
    var zmienna1 = 1;

    //W ciele fukncji jeden jest tworzona nowa fukncja, fukncja dwa
    function dwa() {

        //W ciele fukncji dwa jest wypisanie na konsoli wartości zmienna1, zadeklarowanej w linii 16,
        //wartość zmienna1 wynosi: 1
        console.log(zmienna1);

        //Deklaracja nowej zmiennej w ciele fukncji dwa. Przypisanie do zmienna2 wartości 3.
        var zmienna2 = 3;
    }

    //W ciele fukncji jeden następuje wywołanie fukncji dwa: wypisanie na konsoli zmienna1, zmienna2 wynosi 3.
    dwa();

    //Próba wypisania na konsoli wartości zmienna2 powoduje błąd: zmienna2 is not defined.
    //zmienna2 jest zmienną lokalną, widoczną tylko dla fukncji dwa. Fukncja jeden nie widzi
    // tej zmiennej, nie ma do niej dostępu, stąd powstaje błąd
    console.log(zmienna2)
}

//Próba wywołania fukncji jeden. Program wypisuje na konsoli wartość dla zmienna1 (linia 23),
// przypisuje do zmienna2 wartość 3 (linia 26), następnie program wysypuje się (błąd), 
//kiedy dochodzi do linii 35 i próbuje wypisać wartości zmienna2.
jeden()