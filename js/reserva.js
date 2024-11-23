function valida(event) { 
  var checkbox5 = document.getElementById('idcheckbox5'); 
  if (!checkbox5.checked) { 
    alert("É necessário responder se concorda com a coleta dos dados."); 
    event.preventDefault();
  }
}
