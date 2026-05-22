// ==========================
// CARRUSEL AUTOMÁTICO
// ==========================
let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

function nextSlide() {
    index++;
    if (index >= slides.length) index = 0;
    showSlide(index);
}

function prevSlide() {
    index--;
    if (index < 0) index = slides.length - 1;
    showSlide(index);
}

// automático cada 3 segundos
setInterval(nextSlide, 3000);

// ==========================
// BUSCADOR DE TEXTO
// ==========================

function buscarTexto() {

    let texto = document
        .getElementById("buscador")
        .value
        .trim();

    if (texto === "") {

        alert("Escribe algo");
        return;

    }

    // quitar resaltados anteriores
    document.body.innerHTML =
        document.body.innerHTML.replace(
            /<mark>|<\/mark>/g,
            ""
        );

    let contenido =
        document.body.innerHTML;

    let regex = new RegExp(
        `(${texto})`,
        "gi"
    );

    if (contenido.match(regex)) {

        document.body.innerHTML =
            contenido.replace(
                regex,
                "<mark>$1</mark>"
            );

    }

    else {

        alert(
            "No se encontró: " + texto
        );

    }

}

// ==========================
// BUSCAR CON ENTER
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    let input =
        document.getElementById("buscador");

    if (input) {

        input.addEventListener("keypress", function (e) {

            if (e.key === "Enter") {

                buscarTexto();

            }

        });

    }

});

// ==========================
// SOPORTE
// ==========================

function buscarSoporte() {

    let input = document
        .getElementById("buscadorSoporte")
        .value
        .toLowerCase()
        .trim();

    if (input === "") {

        alert("Describe tu problema primero");
        return;

    }

    // INTERNET LENTO
    if (
        input.includes("lento") ||
        input.includes("velocidad")
    ) {

        alert(
            "Tu conexión puede estar saturada o tener demasiados dispositivos conectados."
        );

    }

    // WIFI
    else if (
        input.includes("wifi") ||
        input.includes("señal")
    ) {

        alert(
            "Coloca el router en un lugar abierto y lejos de paredes gruesas."
        );

    }

    // SIN CONEXION
    else if (
        input.includes("conexion") ||
        input.includes("internet")
    ) {

        alert(
            "Revisa los cables y reinicia el módem durante 30 segundos."
        );

    }

    // ROUTER
    else if (
        input.includes("router") ||
        input.includes("modem")
    ) {

        alert(
            "Verifica que el router tenga luces activas y correctamente conectadas."
        );

    }

    // CONTRASEÑA
    else if (
        input.includes("contraseña") ||
        input.includes("password")
    ) {

        alert(
            "Ingresa a la configuración del router para cambiar la contraseña WiFi."
        );

    }

    // PING
    else if (
        input.includes("ping") ||
        input.includes("lag")
    ) {

        alert(
            "Puede existir congestión en la red o problemas de estabilidad."
        );

    }

    // ERROR GENERAL
    else {

        alert(
            "No se encontró ayuda específica para: " + input
        );

    }

}

// ==========================
// FORMULARIOS
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    let form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert(
                "Mensaje enviado correctamente 👍"
            );

            form.reset();

        });

    }

});

// ==========================
// EFECTO CARDS
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    let cards =
        document.querySelectorAll(".card-soporte");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-8px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0px)";

        });

    });

});

// ==========================
// EFECTO ONLINE
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    let estado =
        document.querySelector(".online");

    if (estado) {

        setInterval(() => {

            estado.style.opacity =
                estado.style.opacity === "0.5"
                    ? "1"
                    : "0.5";

        }, 1000);

    }

});