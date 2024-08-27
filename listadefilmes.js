let listadefilmes = []
let filmesVistos = []

function addFilme(filme) {
   listadefilmes.push(filme)
   console.log(`${filme} foi adicionado à lista`)
}

function ordenarLista() {
   listadefilmes.sort()
   console.log(`Lista ordenada`)
}

function searchFilme(filme) {
  if (listadefilmes.includes(filme)){
   console.log(`${filme} esta na lista.`)
}else{
   console.log(`${filme} não está na lista`)
}
}

function exibirFilme() {
   if (listadefilmes.length === 0) {
       console.log('A lista está vazia.')
   }else{
       console.log('Lista de filmes para assistir:')
       listadefilmes.forEach(filme => console.log(filme))
   }
}

function vistoFilme(filme) {
   const index = listadefilmes.indexOf(filme);
   if (index !== -1) {
       listadefilmes.splice(index, 1);
       filmesVistos.push(filme);
       console.log(`${filme} foi marcado como assistido e removido da lista de filmes para assistir.`);
   } else {
       console.log(`${filme} não está na lista de filmes para assistir.`);
   }   

} 

function removeFilme(filme) {
   const index = listadefilmes.indexOf(filme)
   if (index !== -1){
       listadefilmes.splice(index, 1)
       console.log(`${filme} foi removido da lista.`)
   }else{
       console.log(`${filme} não está na lista.`)
   }
}

function main() {
   let option
 do {
   console.log('\nMenu:')
   console.log('1. Adicionar filme');
   console.log('2. Remover filme');
   console.log('3. Pesquisar filme');
   console.log('4. Ordenar filme');
   console.log('5. Exibir lista de filmes');
   console.log('6. Marcar filme como assistido');
   console.log('7. Encerrar programa');

   option = parseInt(prompt('Escolha uma opção:'));


   switch (option) {
       case 1:
         const addFilmeName = prompt('Digite o nome do filme a ser adicionado:');
         addFilme(addFilmeName);
         break;
       case 2:
         const removeFilmeName = prompt('Digite o nome do filme a ser removido:');
         removeFilme(removeFilmeName);
         break;
       case 3:
         const searchFilmeName = prompt('Digite o nome do filme a ser pesquisado:');
         searchFilme(searchFilmeName);
         break;
       case 4:
         ordenarLista()
         break;
       case 5:
         exibirFilme();
         break;
       case 6:
           const vistoFilmeName = prompt('Digite o nome do filme que você assistiu: ');
           vistoFilme(vistoFilmeName);
         break;
       case 7:
         console.log('Encerrando o programa...');
         break;
       default:
         console.log('Opção inválida, tente novamente.');
     }
   } while (option !== 7);
 }
 
 main()
 