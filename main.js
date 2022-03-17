const form = document.querySelector(".form-quizz");
let tabErgebnis = [];
const anworten = ['c', 'a', 'b', 'a', 'c'];
const emojis = ['✔️', '✨', '👀', '😭', '👎'];
const titelResultat = document.querySelector("h2");
const bewertung = document.querySelector(".note");
const hilfeResultat = document.querySelector(".hilfe");
const alleFragen = document.querySelectorAll('.questionBlock');
let ueberpruefTab= [];



form.addEventListener("submit", (e) => {
    e.preventDefault();
   
    for (i = 1;i < 6;i++){
        tabErgebnis.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    
    ergebnisUberprufungTab(tabErgebnis);
    tabErgebnis = [];

});

function ergebnisUberprufungTab(tabResultats) {
    for (let a = 0; a < 5; a++){
        if (tabErgebnis[a] ===anworten[a]) {
            ueberpruefTab.push(true); 
        } else {
            ueberpruefTab.push(false);
        }
    }
    

    resultatZeigen(ueberpruefTab);
    colorFunction(ueberpruefTab);
    ueberpruefTab = [];

}


function resultatZeigen(tabCheck) {
    const fehlerAnzahl = tabCheck.filter(element => element !== true).length;
   
    switch (fehlerAnzahl) {
        
        case 0:
            titelResultat.innerText = `✔️ Wunderbar!, alle Fragen sind richtig ! ✔️`
            hilfeResultat.innerText = ''
            bewertung.innerText = '5/5'
            break;
        case 1:
            titelResultat.innerText = `✨ Fast! ✨`
            hilfeResultat.innerText = 'Versuche noch einmal nur eine richtige Antwort fehlt'
            bewertung.innerText = '4/5'
            break;
        case 2:
            titelResultat.innerText = `✨Nicht schlecht ... 👀`
            hilfeResultat.innerText = 'Du kannst mehr machen ,vesucht noch einaml !'
            bewertung.innerText = '3/5'
            break;
        case 3:
            titelResultat.innerText = `👀 Es bleiben noch einige Fehler!!. 😭`
            hilfeResultat.innerText = 'Du hast 3 Fragen Falsch geanwortet ,du kannst noch einmal probieren !'
            bewertung.innerText = '2/5'
            break;
        case 4:
            titelResultat.innerText = `😭 Sehr schlecht ! 😭`
            hilfeResultat.innerText = 'Du hast fast alle Fragen Falsch geanwortet ,du kannst noch einmal probieren !'
            bewertung.innerText = '1/5'
            break;
        case 5:
            titelResultat.innerText = `👎 Null Punkte ! 👎`
            hilfeResultat.innerText = 'Alle Antworten sind Falsch ,versuch noch einmal !'
            bewertung.innerText = '0/5'
        break;

        default:
            'Wops, unerwarteter Fall.';

    }
        
}


function colorFunction(tabValBool) {
    for (let j = 0;j < tabValBool.length;j++){
        if (tabValBool[j] === true) {
            alleFragen[j].style.background = "lightgreen";
        } else {
            alleFragen[j].style.background = '#ffb8b8';
            alleFragen[j].classList.add('falscheEingabeAnim');
            setTimeout(() => {
                alleFragen[j].classList.remove('falscheEingabeAnim');
            }, 500);
     }  
    }
}

alleFragen.forEach(frage => {
    frage.addEventListener('click', () => {
        frage.style.background = "white";
    })
})
