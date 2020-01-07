// zadanie 0a
const city = {
    capital: 'San Escobar',
    population: 1111,
    president: 'Bolek',
    primeMinisters: ['Kacper', 'Melchior', 'Baltazar']
}
console.log(city.capital);
console.log(city.population);
console.log(city.president);
console.log(city.primeMinisters);

// zadanie 0b
const timeMachine = {
    shape: 'squer',
    model: 'futuristic',
    run: function(date, place){
        return `Przenoszę się do roku ${date} w ${place}`;
    }
}

console.log(timeMachine.shape);
console.log(timeMachine.model);
console.log(timeMachine.run('1999', 'Bieszczady'));

// zadanie 1 
const book = {};
book.title = 'Behawiorysta';
book.author = 'Remigiusz Mróz';
book.numberOfPages = 548;

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

// zadanie 2
const person = {};
person.name = 'Frank Sinatra';
person.age = 105;
person.sayHello = function(){
    console.log('Hello!');
}

console.log(person.name);
console.log(person.age);
console.log(person.sayHello());

// zadanie 3
const recipe = {
    title: 'kokosowa owsianka',
    servings: 2,
    ingredients: []
}

recipe.ingredients = ['płatki owsiane - 8 łyżek', 'mleko - 1,5 szklanki', 'rodzynki - garść', 'wiórki kokosowe - 3 łyżki'];
console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);

// zadanie 6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);



    