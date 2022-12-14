// 2. Obtener elementos
// 3. Colocar un ángulo random a cada elemento
// 4. Colocar un color random


let text="";
let n;
let color="";
colors= ["--Pink", "--Blue", "--white", "--yellow", "--green", "--lila", "--turquoise", "--orange","--lila2", "--green2"];



//console.log(colors[Math.floor(Math.random()*10)]);

const elements = document.querySelectorAll("div.sprinkle")
// En lugar de for uso forEach
elements.forEach(element => {
  n = Math.floor(Math.random()*361);
  text= n.toString();
  //console.log(text);
  element.style.transform="rotate("+text+"deg)"

  color = colors[Math.floor(Math.random()*10)];
  console.log(color);

  element.style.background="var("+color+")";
})



// for (let i=0; i < elements.length; i++){
//   //document.querySelector('.VentanaFlotante').style.display='none';
//   elements[i].style.transform="rotate(45deg)";
// }

//console.log(elements);
