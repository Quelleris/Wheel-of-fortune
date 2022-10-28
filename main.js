
let i = 12;

let theWheel = new Winwheel({
    'numSegments' : 9,
    'lineWidth'   : 3,
    'segments'    :
    [
        {'fillStyle' : '#33a8c7', 'text' : '1'},
        {'fillStyle' : '#52e3e1', 'text' : '2'},
        {'fillStyle' : '#a0e426', 'text' : '3'},
        {'fillStyle' : '#fdf148', 'text' : '4'},
        {'fillStyle' : '#ffab00', 'text' : '5'},
        {'fillStyle' : '#f77976', 'text' : '6'},
        {'fillStyle' : '#f050ae', 'text' : '7'},
        {'fillStyle' : '#d883ff', 'text' : '8'},
        {'fillStyle' : '#9336fd', 'text' : '9'},
    ]
});


const btn = document.querySelector('#spin-btn');
const canvas = document.querySelector('#canvas')
const audio = new Audio('Kids_Music_3.wav');
let deg = 0;

btn.addEventListener('click', () => {
    audio.play();
	deg = Math.floor(5000 + Math.random() * 5000);
    canvas.style.transition = "all 10s ease-out";
    canvas.style.transform = "rotate(" + deg + "deg)";
})

canvas.addEventListener('transitionend', () => {
    canvas.style.transition = 'none';
    const actualDeg = deg % 360;
    canvas.style.transform = 'rotate(' + actualDeg + 'deg)';
    audio.pause();
    audio.currentTime = 0;
} )

