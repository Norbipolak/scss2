/*
Egy függvény egy olyan blokk kód, amelyet el lehet hívni bizonyos paraméterekkel.
A függvény lehet visszatérési értékkel (return statement), amely visszaad egy értéket a hívó kódnak.
A függvény deklarálható vagy létrehozható kifejezésként is (function declaration vagy function expression).
Példa:
*/

// Függvény deklaráció
function add(a, b) {
    return a + b;
}

// Függvény hívása
let result = add(3, 5); // Az 'result' változó értéke 8 lesz

/*
Eljárás (procedure):

Egy eljárás is egy blokk kód, de nem feltétlenül ad vissza értéket (nem tartalmaz return statementet).

Az eljárás hajt végre különböző műveleteket, de nem ad vissza semmilyen értéket.
Az eljárásoknak lehetnek mellékhatásai (side effects), például konzolra írás, változók állapotának módosítása stb.
Példa:
*/
// Eljárás, amely kiír valamit a konzolra
function greet(name) {
    console.log('Hello, ' + name + '!');
}

// Eljárás hívása
greet('John'); // Ezt a kódot végrehajtva "Hello, John!" lesz kiírva a konzolra

/*
Összefoglalva, a fő különbség a függvény és az eljárás között az, hogy a függvények általában visszaadnak egy értéket, 
míg az eljárások inkább különböző műveleteket hajtanak végre anélkül, hogy visszaadnának valamilyen értéket. 

Azonban JavaScriptben, technikailag mindkettő ugyanazt a célt szolgálja: 
bizonyos műveletek vagy kódrészletek csoportosítását és újrahasznosítását a programozásban.
*/ 