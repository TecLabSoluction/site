let cont = 1;
document.getElementById("botao1").checked = true;
console.log("Funciona");

setInterval(function(){
  proxImg();
}, 7000)

function proxImg(){
  cont++;
  if(cont>6){
    cont=1;
  }
  document.getElementById("botao"+cont).checked = true;
}
