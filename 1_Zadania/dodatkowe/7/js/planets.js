var planets = [
    {
        name: "Merkury",
        numberOfMoons: 0
    },
    {
        name: "Wenus",
        numberOfMoons: 0
    },
    {
        name: "Ziemia",
        numberOfMoons: 1
    },
    {
        name: "Mars",
        numberOfMoons: 2
    },
    {
        name: "Jowisz",
        numberOfMoons: 63
    },
    {
        name: "Saturn",
        numberOfMoons: 60
    },
    {
        name: "Uran",
        numberOfMoons: 27
    },
    {
        name: "Neptun",
        numberOfMoons: 13
    }
];

function sortPlanet(planets) {
    let sortedPlanets = [];
    function compare(a, b) {
        const numberA = a.numberOfMoons;
        const numberB = b.numberOfMoons;

        let comparison = 0;
        if (numberA > numberB) {
            comparison = 1;
        } else if (numberA < numberB) {
            comparison = - 1;
        }
        return comparison * -1;
    }

    sortedPlanets = planets.sort(compare);
    return sortedPlanets;
}

console.log(sortPlanet(planets));

