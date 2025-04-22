// Aluksi:
//      Valitse satunnainen sana sanalistasta
//      Luo tyhjä kenttä näytettäväksi sanasta (alaviivat _)
//      Nollaa arvauslaskurit, väärät kirjaimet ja canvas

// Kirjaimen arvaus:
//      Jos kirjain on jo arvattu: ilmoita tai ohita

//      Jos kirjain on sanassa:
//          Näytä kirjain oikeilla paikoilla
//          Päivitä näytetty sana (_ _ A _ E)
//      Muuten:
//          Lisää kirjain väärien listaan (kirjain yliviivattuna)
//          Piirrä uusi osa ukkelia
//          Lisää virheiden määrää yhdellä

//      Jos kaikki kirjaimet on arvattu oikein:
//          Näytä "Voitit!" & joku ”palkinto”, esim. alerttina ”juhlat” tms

//      Jos virheiden määrä saavuttaa maksimin (kun ukkeli piirretty):
//          Näytä "Hävisit! Sana oli: XXXXX" & esim. alerttina pääkallo/hautakivi tms.

//      Variaabelit:
//  -let sanat = []
//  -let arvattavaSana = ""
//  -let kirjaimet = ["a", "b" jne.]
//  -let virheet = 
//  -let arvaukset =
//  -let 


//      Funktiot:
//  -arvaaSana()
//  -uusiPeli()
//  -arvaaKirjain()
//  -piirräUkko()
//  -piirräSeuraava()
//  -
//  -gameOver()
//  -voitto()

// 

function uusiPeli() {

}

function arvaaSana() {
let arvattuSana= document.getElementById("arvattuSana").value;
if (arvattuSana == PELISANA ) {
alert("Arvasit oikein! Voitit pelin!")
}
else { alert("Arvasit väärin. Game Over.")
}
}
function arvaaKirjain(kirjain, sanat) {
    let taulukko = //sana pitää rikkoa kirjaimiksi
    for (let i = 0; i < taulukko.length; i++) {
        if (kirjain == taulukko[i]) {
            document.getElementById("").innerHTML= taulukko[i];
        }
    }
}

function piirräUkko() {

}

function gameOver() {

}

function voitto() {
    
}


