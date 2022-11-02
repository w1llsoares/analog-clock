const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

var data = new Date();
console.log(data);
let hr = data.getHours();
let min = data.getMinutes();
let seg = data.getSeconds();
console.log("Horas: " + hr + " Minutos: " + min + " Segundos: " + seg);

let posicaoHora = (hr * 360) / 12 + (min * (360 / 60)) / 12;
let posicaoMinuto = (min * 360) / 60 + (seg * (360 / 60)) / 60;
let posicaoSegundo = (seg * 360) / 60;

function executarRelogio() {
  posicaoHora = posicaoHora + 3 / 360;
  posicaoMinuto = posicaoMinuto + 6 / 60;
  posicaoSegundo = posicaoSegundo + 6;

  PONTEIROHORA.style.transform = "rotate(" + posicaoHora + "deg)";
  PONTEIROMINUTO.style.transform = "rotate(" + posicaoMinuto + "deg)";
  PONTEIROSEGUNDO.style.transform = "rotate(" + posicaoSegundo + "deg)";
}

var intervalo = setInterval(executarRelogio, 1000);
