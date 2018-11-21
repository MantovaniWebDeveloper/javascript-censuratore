//creo la frase
var fraseUtente = "Ciao sono Fernando Alonso, ed il prossimo anno guiderò in Indycar";
// salvo in un array le parole proibite
var paroleProibite = ["Fernando","guiderò","ed"];
//navigo la frase e nel mentre
//confronto le parole della frase con
// le parole proibite


var contatore = 0;
var paroleCensurate = 0;
while (contatore < paroleProibite.length) {
  console.log(paroleProibite[contatore]);
  if(fraseUtente.includes(paroleProibite[contatore])){
    fraseUtente = fraseUtente.replace(paroleProibite[contatore], 'xxx');
    paroleCensurate++;
  }
  contatore ++;
}

function contaParoleFrase(fraseUtente){
  var numeroParoleSeparate;
  var paroleSeparate =fraseUtente.split(" ");
  console.log(paroleSeparate)
  numeroParoleSeparate = paroleSeparate.length;
  return numeroParoleSeparate;
}

var paroleFraseCont = contaParoleFrase(fraseUtente);

console.log(fraseUtente);
console.log("Numero parole censurate " +paroleCensurate);
console.log("paroli totali nella frase " + paroleFraseCont);
document.writeln(fraseUtente);
