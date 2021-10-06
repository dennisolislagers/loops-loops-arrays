// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in bovenstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================

// Stappenplan:
// 1 een for loop maken die ongeacht de lengte alle waardes in de array aanspreekt d.m.v. .length.
// 2 alle waardes loggen en "je" eraan vastplakken.

const names = ["Henk", "Piet", "Fred", "Joop"];
console.log(names);
for (let i = 0; i < names.length; i++) {
    console.log(names[i] + "je");
}

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]


// ==========================================
// Opdracht 2
// Schrijf een script dat ieder getal in bovenstaande array met 3 vermenigvuldigd.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

// Stappenplan.
// 1 een for loop maken die ongeacht de lengte alle waardes in de array aanspreekt d.m.v. .length.
// 2 alle waardes aanspreken en vermenigvuldigen met 3.

const numbers = [2, 4, 5, 29, 38];
console.log(numbers);
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 3);
}
;


// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 6, 12, 15, 87, 114 ];


// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array het volume uitrekent.
// Het volume is lengte x breedte x hoogte
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const squares = [30, 2, 8, 24, 11];
console.log(squares);
for (let i = 0; i < squares.length; i++) {
    console.log(squares[i] * squares[i] * squares[i]);
}

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [27000, 8, 512, 13824, 1331];
