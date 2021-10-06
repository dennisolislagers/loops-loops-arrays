// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================
// Ik maak een loop die drie maal Hoera! laat verschijnen in de terminal.
for (let i = 0; i < 3; i++){
    console.log("Hoera!");
}


// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
 // ==========================================

// Dit doe ik door eerst een loop te maken en daarna een if statement in de loop te plaatsen die 4 maal Loop... in de terminal laat verschijnen.
// Vervolgens een if statement die i =  4 beschrijft.
//De loop moet wel doorgaan tot en met de 4, dus loop is kleiner dan 5 of kleiner en/of gelijk aan 4.

for (let i = 0; i <= 4; i++) {
    if (i < 4) {
        console.log("Loop...");
    }
    if (i === 4) {
        console.log("Klaar!");
        }
}




// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven

// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over..
// ==========================================

// Dit doe ik door gebruik te maken van de modulo operator.
// Eerst de loop maken en een if statement maken die i door modulo 2 deelt, als er niets overblijft is het getal even.
// Vervolgens weer een if statement maken die i door module 2 deelt, als er iets overblijft is het getal oneven.
// De loop moet tot 15 lopen, dus kleiner dan 16 of kleiner en/of gelijk aan 15.
    for (let i = 0; i <= 15; i++) {
        if ( i % 2 === 0){
            console.log (i + " = even");
        }
        if ( i % 2 > 0) {
            console.log (i + " = oneven")
        }
    }


// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================

// Dit doe ik door een for loop te maken met daarin 3 if statements.
// Bij het maken van de if statements rekening houden met het feit dat alle nummers worden aangesproken.

for (let i = 0; i<=9; i++) {
   if (i < 3){
       console.log(i);
   }
   if (i >= 3  && i <= 5 ){
       console.log( ">" + i);
   }
   if (i >=6 && i <= 9) {
       console.log( ">>" + i);
   }
}

