const form = document.getElementById("form-ponderada");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const n1 = Number(document.getElementById("n1").value);
  const p1 = Number(document.getElementById("p1").value);
  const n2 = Number(document.getElementById("n2").value);
  const p2 = Number(document.getElementById("p2").value);


  const somaPesos = p1 + p2;

  if(somaPesos === 0){
    resultado.innerHTM = "A soma dos pesos não pode ser zero";
    return;
  }

  const mediaPonderada = (n1 * p1 + n2 * p2)/ somaPesos;

  resultado.innerHTML =`<p> Média Ponderada: ${mediaPonderada.toFixed(2)}</p>`;


});
