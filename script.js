let a= Math.floor(Math.random()*360);
console.log(a)
console.log("Hello world!")



setTimeout(function(){
  //document.querySelector('.test').s
  document.querySelector('.test').innerHTML = a;
  document.querySelector('.sprinkle').style.transform= "rotate(45deg)";
  //document.querySelector('.sprinkle').style.display='none';
},1000);
