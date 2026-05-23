const boton = document.getElementById("btnCalcular");

boton.addEventListener("click", calcularEdad);

function calcularEdad() {
    const nacimiento = Number(document.getElementById("anio").value);
    const actualidad = 2026;
    const edad = actualidad - nacimiento;

   if (document.getElementById("anio").value.trim() === "") {
    document.getElementById("resultado").textContent = `Porfavor introduzca su año de nacimiento`;
    return;} 

   if (edad < 18) {document.getElementById("resultado").textContent = `Tienes ${edad} años. Eres menor de edad`;}
   else {document.getElementById("resultado").textContent = `Tienes ${edad} años.`;}
}