// 2. Obtener elementos
// 3. Colocar un ángulo random a cada elemento
// 4. Colocar un color random


let text="";
let n;
const elements = document.querySelectorAll("div.sprinkle")
// remember recorrer elementos.
elements.forEach(element => {
  n = Math.floor(Math.random()*361);
  text= n.toString();
  console.log(text);
  element.style.transform="rotate("+text+"deg)"
})



// for (let i=0; i < elements.length; i++){
//   //document.querySelector('.VentanaFlotante').style.display='none';
//   elements[i].style.transform="rotate(45deg)";
// }

//console.log(elements);
