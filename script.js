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


//  -piirräSeuraava()

let sanat = [relaatiotietokanta, ratkaisuarkkitehti, heuristiikka, palvelumuotoilu, parametri, välimuisti, sovellusvirtualisointi, javascript, projektipäällikkö, analytiikka];
let kirjaimet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, x, y, z, å, ä, ö];
let väärinarvatut = "";
let arvaukset = "";
let arvattavaSana = "";
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");



function uusiPeli() { // Tyhjentää pelikentän, hakee pelattavan sanan + piirtää puun
    
    //puu
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 300)
    ctx.lineTo(300, 300)
    ctx.moveTo(200, 5)
    ctx.lineTo(200, 300)
    ctx.moveTo(90, 5)
    ctx.lineTo(200, 5)
    ctx.stroke();
    ctx.closePath();
    }

function arvattavaSana() {
    
}
function arvaaSana() {
    let arvattuSana = document.getElementById("arvattuSana").value;
    let result = arvattuSana.toLowerCase().trim();
    if (result == arvattavaSana) {
        voitto(arvattavaSana);
    }
    else {
        gameOver(arvattavaSana);
    }
}
function arvaaKirjain(arvattavaSana) { // tarkistaa että kirjain löytyykö kirjain sanasta EI ja KYLLÄ
    let kirjain = document.getElementById("kirjain").value;
    let syote = kirjain.toLowerCase(); 
      //  kirjaimenTarkistus();
    arvaukset.push(syote);
    let tarkiste=""; 
    for (let i = 0; i < arvattavaSana.length; i++) {
        if (syote == arvattavaSana[i]) {
            document.getElementById("").innerHTML= arvattavaSana[i];
            tarkiste="OK";
        }
    }
    document.getElementById("").innerHTML = syote;
    if (tarkiste == "OK") {
        sananTarkistus(arvattavaSana);
    } else {
        piirräUkko();
    }
}

function piirräUkko() { // piirtää palasen  

}

// function kirjaimenTarkistus() {

//}

function sananTarkistus(arvattavaSana) { //tarkistaa onko kaikki oikeat kirjaimet löydetty
    let a = 0;
    for(let i= 0; i < arvattavaSana.length; i++) { // käy kaikki sanan kirjaimet läpi yksitellen
        for (let i = 0; i < arvaukset.length; i++) { 
            if (arvattavasana[i] == arvaukset[i]) { // tarkistaa kuinka moni kirjain löytyy jo arvatut taulukosta
                a++; // laskuri laskee kaikki kirjaimet jotka on jo arvattu 
            }
        }
    }
    if (a == arvattavaSana.length) { //vertaa laskurin arvoa arvattavan sanan pituuteen
        voitto(arvattavaSana); // Mikäli kaikki kirjaimet oli jo arvattu --> voitto
    }
    else {
        return;
    }
}

function gameOver(arvattavaSana) { // 1. Jos arvaa sanan väärin 2. Jos arvaa kirjaimet väärin
alert("Hävisit pelin!");
}

function voitto(arvattavaSana) { // 1. Jos arvaa sanan oikein 2. Jos arvaa kirjaimet oikein
alert("Onneksi olkoon! Voitit pelin!");
}


