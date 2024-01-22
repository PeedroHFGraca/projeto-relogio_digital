const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

const relogio = setInterval(function time (){
    let dadteToday = new Date();
    let hr = dadteToday.getHours(); 
    let min = dadteToday.getMinutes(); 
    let seg = dadteToday.getSeconds(); 

    if(hr<10) hr = '0' + hr;
    if(min<10) min = '0' + min;
    if(seg<10) seg = '0' + seg;

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg 
});