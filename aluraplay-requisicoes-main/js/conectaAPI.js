async function listaVideos() {
   const conexao = await fetch("http://localhost:3000/videos"); //fetch é asyn que está retornando uma promise (promessa). quando não definimos nada além entao é uma requisição get.
   const conexaoConvertida = await conexao.json();

   return conexaoConvertida;
}

//função para adicionar novos vídeos no jason.
async function criaVideo(titulo, descricao, url, imagem){
   const conexao = await fetch("http://localhost:3000/videos", {
      method: "POST", //requisição POST
      headers: {
         "Content-type": "application/json" //tipo de conteúdo sedo enviado ou recebido
      },
      body:JSON.stringify({
         titulo : titulo,
         descricao : `${descricao} mil visualizações`,
         url : url,
         imagem : imagem
      })
   });

   const conexaoConvertida = await conexao.json();
   return conexaoConvertida;
}

async function buscaVideos(termoDeBusca){
   const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
   const conexaoConvertida = conexao.json();

   return conexaoConvertida
}

export const conectaAPI = {  //exportação das funções criadas acima.
   listaVideos,
   criaVideo,
   buscaVideos
}