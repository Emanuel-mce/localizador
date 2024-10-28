// JavaScript para cambiar los mensajes de cumpleaños
const mensajes = [
    "🎉 ¡Feliz Cumpleaños, amiga querida! 🎉",
    "💖 Que tengas un día maravilloso lleno de sorpresas y alegrías 💖",
    "🎂 ¡Que se cumplan todos tus deseos en este día especial! 🎂",
    "🎁 Gracias por ser una amiga tan increíble, ¡te quiero mucho! 🎁",
    "🎊 ¡Hoy celebramos a una persona muy especial como tú! 🎊"
];

let indiceMensaje = 0;

document.getElementById('mostrarMensajes').addEventListener('click', function() {
    const mensajeElemento = document.getElementById('mensaje');
    indiceMensaje = (indiceMensaje + 1) % mensajes.length;
    mensajeElemento.textContent = mensajes[indiceMensaje];
});
