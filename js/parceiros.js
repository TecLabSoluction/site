let cont = 1;
document.getElementById("botoes1").checked = true;

setIntervalo(function(){
  proxImg();
}, 10000)

function proxImg(){
  cont++;
  if(cont>6){
    cont=1;
  }
  document.getElementById("botoes"+cont).checked = true;
}
