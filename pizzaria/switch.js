
let erro = 1;

/* Versão IF
if( erro == 0) {
    console.log("Upload OK");
} else if(erro == 1){
    console.log("Tamanho de arquivo excede permitido.");
} else if (erro == 2) {
    console.log("Arquivo corrompido no upload.");
} else if (erro == 3) {
    console.log("Conexão interrompida durante upload");
} */

/*
switch(erro){
    case 0:
        console.log("Upload OK");
        break;
    
    case 1:
        console.log("Tamanho de arquivo excede permitido.");
        break
    
    case 2:
        console.log("Arquivo corrompido");
        break;
    
    case 3:
        console.log("Conexão interrompida");
        break;

    default:
        console.log("Erro desconhecido");
}
*/

const erros = [
    "Upload OK",
    "Tamanho de arquivo excede permitido.",
    "Arquivo corrompido",
    "Conexão interrompida",
];

if(erro < 0 || erro >= erros.length){
    console.log("Erro desconhecido");
} else {
    console.log(erros[erro]);
}