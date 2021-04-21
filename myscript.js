/*
Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
Consigli del giorno:
Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.
*/

// punto 1, chiedo all'utente il cognome con un prompt
var userSurname = prompt("Inserire il proprio cognome.");

// vogliamo che la prima lettera della parola inserita dall'utente sia SEMPRE maiuscola, a prescindere da quello che inserisce l'utente stesso.
userSurname = userSurname[0].toUpperCase() + userSurname.substring(1);

// punto 2, definisco un array con già all'interno dei cognomi, e faccio in modo che il cognome
// che inserisce l'utente, vada ad aggiungersi all'array esistente.

var surnameList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli", "Arancioni"];

surnameList.push(userSurname);

console.log(surnameList);

// punto 3, stampare la lista, ma ordinata alfabeticamente
// method .sort() di default se non si mette nulla tra le parentesi ordina l'array alfabeticamente da a verso z

surnameList.sort();

console.log(surnameList);

// punto 4, scrivere anche la posizione della lista, in cui si trova la parola inserita. (Partendo da 1)
// quindi devo cercare l'indice della parola inserita, una volta che la lista viene riordinata alfabeticamente.


for (var i = 0; i < surnameList.length; i++) {
    var targetSurname = surnameList[i];

    if (targetSurname === userSurname) {
         console.log('In ordine alfabetico, il cognome inserito si trova alla posizione numero: ' + (i + 1));
         document.getElementById('posUserSurname').innerHTML= 'In ordine alfabetico, il cognome inserito si trova alla posizione numero: ' + (i + 1);
    }

    // per completezza ecco la lista ordinata, di tutti i cognomi.
    document.getElementById('surnameRanking').innerHTML += "<li>" + targetSurname + "</li>";
}


