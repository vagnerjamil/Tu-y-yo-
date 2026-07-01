let texto = "Eu quero te dizer algo muito importante...";
let i = 0;

function escrever() {
  if (i < texto.length) {
    document.getElementById("texto").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escrever, 50);
  }
}

escrever();

function irTela2() {
  document.getElementById("tela1").classList.remove("ativa");
  document.getElementById("tela2").classList.add("ativa");
}

function irTela3() {
  document.getElementById("tela2").classList.remove("ativa");
  document.getElementById("tela3").classList.add("ativa");
}

function nao() {
  navigator.vibrate(200);

  document.getElementById("msg").innerHTML =
    "🥺 ¿Estás segura? <br>❤️ Vamos a ser felices juntos <br>✨ Seríamos tú y yo <br>🥹 Dime que sí";

  document.getElementById("sim").style.transform = "scale(1.4)";
  document.getElementById("nao").style.transform = "scale(0.5)";
  document.getElementById("nao").style.opacity = "0.3";
}

function sim() {
  document.getElementById("tela3").classList.remove("ativa");
  document.getElementById("final").classList.add("ativa");

  chuvaCoracoes();
  tocarMusica();
  mostrarFotos();
}

function chuvaCoracoes() {
  for (let i = 0; i < 40; i++) {
    let c = document.createElement("div");
    c.innerHTML = "❤️";
    c.classList.add("coracao-chuva");
    c.style.left = Math.random() * 100 + "vw";
    c.style.fontSize = Math.random() * 20 + 10 + "px";
    c.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(c);

    setTimeout(() => {
      c.remove();
    }, 5000);
  }
}

function mostrarFotos() {
  let fotos = document.querySelectorAll(".foto");

  fotos.forEach((foto, i) => {
    setTimeout(() => {
      foto.style.opacity = "1";
      foto.style.transform = "scale(1)";
    }, i * 1000);
  });
}

function tocarMusica() {
  document.getElementById("musica").play();
}
