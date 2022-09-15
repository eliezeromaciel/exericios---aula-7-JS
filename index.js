function soma() {
  const n1 = document.getElementById("n1");
  const n2 = document.querySelector("#n2"); // PELO ID, é preciso escrever JOGO DA VELHA antes
  const n3 = document.querySelector("#n3");
  const resultado = document.querySelector("#resultado");

  let num1 = Number(n1.value);
  let num2 = Number(n2.value);
  let num3 = Number(n3.value);

  let somaNums = num1 + num2 + num3;
  resultado.innerHTML = `A soma dos números é ${somaNums}`;
}
