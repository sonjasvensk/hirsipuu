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

let sanat = [
  // vaihdoin nämä stringeiksi
  "relaatiotietokanta",
  "ratkaisuarkkitehti",
  "heuristiikka",
  "palvelumuotoilu",
  "parametri",
  "välimuisti",
  "sovellusvirtualisointi",
  "javascript",
  "projektipäällikkö",
  "analytiikka",
];
let kirjaimet = [
  //vaihdoin nämä srtingeiksi
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "z",
  "å",
  "ä",
  "ö",
];
let väärinArvatut = []; //vaihdoin taulukoksi
let arvaukset = []; //vaihdoin taulukoksi
let arvattavaSana = "";
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(20, 300);
ctx.lineTo(300, 300);
ctx.moveTo(200, 5);
ctx.lineTo(200, 300);
ctx.moveTo(90, 5);
ctx.lineTo(200, 5);
ctx.stroke();
ctx.closePath();

function uusiPeli() {
  // Tyhjentää pelikentän, hakee pelattavan sanan  + piirtää puun
  arvattavaSana = sanat[Math.floor(Math.random() * sanat.length)]; //poistin sen arvattavaSana funktion, koska siihen tuli vain yksi rivi ja sen voi tehdä täällä
  arvaukset = []; //tyhjentää arvaukset
  väärinArvatut = []; //tyhjentää väärinarvatut
  ctx.clearRect(0, 0, canvas.width, canvas.height); //tyhjentää pelikentän
  //puu
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(20, 300);
  ctx.lineTo(300, 300);
  ctx.moveTo(200, 5);
  ctx.lineTo(200, 300);
  ctx.moveTo(90, 5);
  ctx.lineTo(200, 5);
  ctx.stroke();
  ctx.closePath();

  return arvattavaSana;
}

function arvaaSana() {
  let arvattuSana = document.getElementById("arvattuSana").value;
  let result = arvattuSana.toLowerCase().trim();
  if (result == arvattavaSana) {
    voitto(arvattavaSana);
  } else {
    gameOver(arvattavaSana);
  }
}
function arvaaKirjain(arvattavaSana) {
  // tarkistaa että kirjain löytyykö kirjain sanasta EI ja KYLLÄ
  let kirjain = document.getElementById("kirjain").value;
  let syote = kirjain.toLowerCase();
  kirjaimenTarkistus(syote);
  
  let tarkiste = "";
  for (let i = 0; i < arvattavaSana.length; i++) {
    if (syote == arvattavaSana[i]) {
      document.getElementById("").innerHTML = arvattavaSana[i];
      tarkiste = "OK";
    }
  }
  document.getElementById("").innerHTML = syote;

  if (tarkiste == "OK") {
    arvaukset.push(syote); // siirtää kirjaimen arvattuihin
    sananTarkistus(arvattavaSana);
  } else {
    väärinArvatut.push(syote); // Siirtää kirjaimen väärin arvattuihin
    piirräUkko();
  }
}

function kirjaimenTarkistus(syote) {
  let tarkiste = "";
  for (let i = 0; i < arvaukset.length; i++) {
    if (arvaukset[i] == syote) {
      tarkiste = "OK";
    }
  }
  for (let i = 0; i < väärinArvatut.length; i++) {
    if (väärinArvatut[i] == syote) {
      tarkiste = "ok";
    }
  }
  if (tarkiste == "OK" || tarkiste == "ok") {
    alert("Kirjain on jo arvattu!");
    return;
  } else {
    return;
  }
}

function piirräUkko() {
  let virheet = väärinArvatut.length;
  ctx.strokeStyle = "black";
  // piirtää palasen
  // köysi
  if (virheet == 1) {
    ctx.beginPath();
    ctx.moveTo(100, 5);
    ctx.lineTo(100, 51);
    ctx.stroke();
    ctx.closePath();
  }
  //pää
  else if (virheet == 2) {
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
  }
  //kroppa
  else if (virheet == 3) {
    ctx.beginPath();
    ctx.moveTo(100, 150);
    ctx.lineTo(100, 220);
    ctx.stroke();
  }
  //vasen jalka
  else if (virheet == 4) {
    ctx.moveTo(100, 220);
    ctx.lineTo(70, 270);
    ctx.stroke();
  }
  //oikea jalka
  else if (virheet == 5) {
    ctx.moveTo(100, 220);
    ctx.lineTo(130, 270);
    ctx.stroke();
  }
  //vasen käsi
  else if (virheet == 6) {
    ctx.moveTo(100, 170);
    ctx.lineTo(50, 150);
    ctx.stroke();
  }
  //oikea käsi
  else if (virheet == 7) {
    ctx.moveTo(100, 170);
    ctx.lineTo(150, 150);
    ctx.stroke();
  }

  if (virheet > 7) {
    // jos virheitä yli 7 (ukko valmis) gameover
    gameOver(arvattavaSana);
  }
}

function sananTarkistus(arvattavaSana) {
  //tarkistaa onko kaikki oikeat kirjaimet löydetty
  let a = 0;
  for (let i = 0; i < arvattavaSana.length; i++) {
    // käy kaikki sanan kirjaimet läpi yksitellen
    for (let j = 0; j < arvaukset.length; j++) {
      if (arvattavaSana[i] == arvaukset[j]) {
        // tarkistaa kuinka moni kirjain löytyy jo arvatut taulukosta
        a++; // laskuri laskee kaikki kirjaimet jotka on jo arvattu
      }
    }
  }
  if (a == arvattavaSana.length) {
    //vertaa laskurin arvoa arvattavan sanan pituuteen
    voitto(arvattavaSana); // Mikäli kaikki kirjaimet oli jo arvattu --> voitto
  } else {
    return;
  }
}

function gameOver(arvattavaSana) {
  // 1. Jos arvaa sanan väärin 2. Jos arvaa kirjaimet väärin
  alert("Hävisit pelin! Sana oli: " + arvattavaSana);
}

function voitto(arvattavaSana) {
  // 1. Jos arvaa sanan oikein 2. Jos arvaa kirjaimet oikein
  alert("Onneksi olkoon! Voitit pelin!");
}
