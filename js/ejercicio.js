const botonAzul = document.getElementById("botonAzul");
const botonRojo = document.getElementById("botonRojo");
const botonVerde = document.getElementById("botonVerde");
const botonReset = document.getElementById("botonReset");


function cambiarTema(fondo, colorTexto) {
    document.body.style.backgroundColor = fondo;
    document.body.style.color = colorTexto;
}

botonAzul.addEventListener("click", () => {
    cambiarTema("blue", "lightblue");
});

botonRojo.addEventListener("click", () => {
    cambiarTema("red", "lightcoral");
});

botonVerde.addEventListener("click", () => {
    cambiarTema("green", "lightgreen");
});

botonReset.addEventListener("click", () => {
    cambiarTema("white", "black");
});
