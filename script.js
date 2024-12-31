const mensagens = [
  "Que o seu Ano Novo seja repleto de realizações!",
  "Feliz Ano Novo! Que 2025 traga muita alegria e sucesso.",
  "Desejamos a você um próspero Ano Novo, cheio de paz e saúde.",
  "Que todos os seus sonhos se realizem neste novo ano. Feliz 2025!",
  "Boas festas e um Ano Novo cheio de conquistas!",
  "Que o próximo ano seja tão brilhante quanto os seus sonhos. Feliz Ano Novo!",
  "Que a esperança e a alegria sejam suas companheiras neste novo ciclo. Feliz Ano Novo!",
  "Um brinde ao amor, à saúde e ao sucesso neste novo ano que se inicia!",
  "Que 2025 seja repleto de sorrisos, abraços e conquistas inesquecíveis.",
  "Um novo ano, uma nova chance de recomeçar e ser feliz. Feliz 2025!",
  "Que a luz do novo ano ilumine seus caminhos e traga felicidade.",
  "Que cada dia de 2025 seja uma nova oportunidade de ser ainda mais incrível!",
  "Feliz Ano Novo! Que a paz e a prosperidade estejam presentes em todos os momentos.",
  "Que o amor e a gratidão encham seu coração neste novo ano.",
  "Um novo capítulo se inicia, e você é o autor da sua própria história. Feliz Ano Novo!",
  "Desejo a você um ano cheio de amor, harmonia e realizações.",
  "Que 2025 traga novas aventuras, aprendizados e muitas alegrias!",
  "Deixe para trás o que não deu certo e abrace as novas oportunidades de 2025. Feliz Ano Novo!",
  "Que a magia do Ano Novo renove suas energias e inspire grandes conquistas!",
  "Feliz Ano Novo! Que este ano seja o melhor da sua vida até agora!",
];

const dataAnoNovo = new Date("2025-01-01T00:00:00");
const ids = ["meses", "dias", "horas", "minutos", "segundos"];

let intervalo;

function atualizarContador() {
  const agora = new Date();
  const diferenca = dataAnoNovo - agora;

  if (diferenca <= 0) {
    clearInterval(intervalo);
    document.querySelector(".contador").style.display = "none";
    document.getElementById("mensagem").style.display = "block";

    const mensagemAleatoria =
      mensagens[Math.floor(Math.random() * mensagens.length)];
    document.querySelector("#mensagem p").textContent = mensagemAleatoria;
    return;
  }

  const meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30));
  const dias = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  const horas = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  const valores = [meses, dias, horas, minutos, segundos];
  valores.forEach((valor, i) => {
    document.getElementById(ids[i]).textContent = valor
      .toString()
      .padStart(2, "0");
  });
}

intervalo = setInterval(atualizarContador, 1000);
atualizarContador();
