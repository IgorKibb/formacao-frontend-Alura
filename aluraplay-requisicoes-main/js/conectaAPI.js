async function listaVideos() {
   const conexao = await fetch("http://localhost:3000/videos"); //fetch é asyn que está retornando uma promise (promessa). quando não definimos nada além entao é uma requisição get.
   const conexaoConvertida = await conexao.json();

   return conexaoConvertida;
}

export const conectaAPI = {
   listaVideos
}