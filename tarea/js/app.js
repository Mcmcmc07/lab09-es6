import { curso, todos } from "./datos.js";
import { promedio, estado } from "./calculos.js";
import reporte from "./calculos.js";

console.log(`Curso: ${curso}`);

const lista = document.querySelector("#reportes");

todos.forEach((estudiante) => {
  const texto = reporte(estudiante);
  console.log(texto);

  const elemento = document.createElement("li");
  elemento.textContent = texto;
  lista.appendChild(elemento);
});
