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


//      Funktiot:
//  -arvaaSana()
//  -uusiPeli()
//  -arvaaKirjain()
//  -piirräUkko()
//  -piirräSeuraava()
//  -
//  -gameOver()
//  -voitto()

let sanat = [relaatiotietokanta, ratkaisuarkkitehti, heuristiikka, palvelumuotoilu, parametri, välimuisti, sovellusvirtualisointi, javascript, projektipäällikkö, analytiikka];
let kirjaimet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, x, y, z, å, ä, ö];
let väärinarvatut = "";
let arvaukset = "";
let arvattavaSana = "";

    function uusiPeli() { // Tyhjentää pelikentän, hakee pelattavan sanan

    }

function arvaaSana() {
    let arvattuSana = document.getElementById("arvattuSana").value;
    let result = arvattuSana.toLowerCase().trim();
    if (result == arvattavaSana) {
        function voitto(arvattavaSana)
    }
    else {
        function gameOver (arvattavaSana)
    }
}
function arvaaKirjain(kirjain, sanat) { // tarkistaa että kirjain löytyykö kirjain sanasta EI ja KYLLÄ
    let taulukko = //sana pitää rikkoa kirjaimiksi
    for (let i = 0; i < taulukko.length; i++) {
        if (kirjain == taulukko[i]) {
            document.getElementById("").innerHTML= taulukko[i];
        }
    }
}

function piirräUkko() { // 

}

function gameOver() { // 1. Jos arvaa sanan väärin 2. Jos arvaa kirjaimet väärin

}

function voitto() { // 1. Jos arvaa sanan oikein 2. Jos arvaa kirjaimet oikein

}


