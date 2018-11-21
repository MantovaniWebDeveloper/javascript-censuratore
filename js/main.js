//creo la frase
var fraseUtente = "Ciao sono Fernando Alonso, ed il prossimo anno guiderò in Indycar";
// salvo in un array le parole proibite
var paroleProibite = ["Fernando","guiderò","ed"];
//navigo la frase e nel mentre
//confronto le parole della frase con
// le parole proibite

for (var i = 0; i < fraseUtente.length; i++) {
  var parole = fraseUtente.split(" ");
}
var contatore = 0;
while (contatore < paroleProibite.length){
  console.log(paroleProibite[contatore]);
  if(fraseUtente.includes(paroleProibite[contatore])){
    fraseUtenteModificata = fraseUtente.replace(paroleProibite[contatore], 'xxx');
    console.log(fraseUtenteModificata)
  }
  contatore++;
}
console.log(fraseUtenteModificata);
document.writeln(fraseUtenteModificata);
