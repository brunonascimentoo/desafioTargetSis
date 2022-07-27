// function fibonacci() {
//     fibo[0] = 0
//     fibo[1] = 1

//     for( i = 2; i < 25; i++) {
//         fibo[i] = fibo[i -1] + fibo [i -2];
//     }

//     for(i = 0; i < 25; i++) {
//         console.log(fibo[i], ", ")
//     }
// } 

function fibonacci(){
  var termo = parseInt(document.getElementById('numero').value);
  var resposta = document.getElementById('resposta');
  var penultimo=0, ultimo=1;
  var numero;

  if(termo<=2)
   numero = termo-1;
  else
   for(var count=3 ; count<=termo ; count++){
    numero = ultimo + penultimo;
    penultimo = ultimo;
    ultimo = numero;

   }
   if(termo !== numero) {
       resposta.innerHTML=`${numero}, pertence a sequencia`;
       
} else {
    resposta.innerHTML=`${numero}, não pertence a sequencia`;

   }

}