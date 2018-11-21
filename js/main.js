//creo la frase
var fraseUtente = "Ciao sono Fernando Alonso, ed il prossimo anno guiderò in Indycar";
// salvo in un array le parole proibite
var paroleProibite = ["Fernando","guiderò","ed"];

var arrayParoleSeparate = [];
//navigo la frase e nel mentre
//confronto le parole della frase con
// le parole proibite
/*for (var i = 0; i < paroleProibite.length; i++) {
  var newArray = [];
  console.log(paroleProibite[i]);
  if (fraseUtente.includes(paroleProibite[i])){


  }
  else {
    console.log("non ci sono parole da censirare");
  }
}*/
for (var i = 0; i < fraseUtente.length; i++) {
  var parola = fraseUtente.split(" ");
  arrayParoleSeparate.push(parola);
}
console.log(parola);
for (var i = 0; i < parola.length; i++) {
  console.log(parola[i]);
  for (var k = 0; k < paroleProibite.length; k++) {
    if (parola[i] == paroleProibite[k]) {
      console.log("parola censurata trovata");
    }
  }
}
//se una parola della frase è proibita
// la parola deve essere sostitutia con xxx
