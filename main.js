// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
  
const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
}

const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
}

const fernando = {
    name: "Fernando",
    lastName: "Peppini",
    isAmbassador: true,
}

const prices = [34, 10202, 232, 2]

let utenti = [];
let amb = [];

let tot_carello_amb = 0;
let tot_carello = 0;
const shippingCost = 50
let utenteCheEffettuaLAcquisto = fernando //cambia il valore qui per provare se il tuo algoritmo funziona!

if (utenteCheEffettuaLAcquisto.isAmbassador) {

    console.log(`${utenteCheEffettuaLAcquisto.name} è un ambassador`);
    for (let i = 0; i < prices.length; i++)
        tot_carello += prices[i];

    tot_carello_amb = tot_carello - (tot_carello * 30) / 100;

    console.log(`Il carrello scontato (spedizone esclusa) è di: ${tot_carello_amb}\n\n\n`);

    if (tot_carello_amb > 100)
        console.log(`La spedizione è gratis!\n Il carrello è di: ${tot_carello_amb}\n\n\n`);
    
    else
        console.log(`Devi pagare la spedizone\nIl carrello scontato (spedizione inclusa) è di: ${tot_carello_amb + shippingCost}\n\n\n`);

} else {
    console.log(`${utenteCheEffettuaLAcquisto.name} non è un ambassador`);
    for (let i = 0; i < prices.length; i++)
        tot_carello += prices[i];
    
    if (tot_carello > 100)
        console.log(`La spedizione è gratis!\n Il carrello è di: ${tot_carello}\n\n\n`);
    
    else
        console.log(`Devi pagare la spedizone\nIl carrello (spedizione inclusa) è di: ${tot_carello + shippingCost}\n\n\n`);
}

utenti.push(marco, paul, amy, fernando);

for (let i = 0; i < utenti.length; i++) {
    
    if (utenti[i].isAmbassador) {
        console.log(`${utenti[i].name} ${utenti[i].lastName} è un ambassador`);
        amb.push(utenti[i]);
    } else {
        console.log(`${utenti[i].name} ${utenti[i].lastName} non è un ambassador`);
    }
}

console.log("\n\n\nGli ambassador sono: ");

for (let i = 0; i < amb.length; i++)
    console.log(`${amb[i].name} ${amb[i].lastName}`);
