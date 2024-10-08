let shoppingList = [];

function addItem(item) {
  shoppingList.push(item);
  console.log(`${item} foi adicionado à lista.`);
}

function removeItem(item) {
  const index = shoppingList.indexOf(item);
  if (index !== -1) {
    shoppingList.splice(index, 1);
    console.log(`${item} foi removido da lista.`);
  } else {
    console.log(`${item} não está na lista.`);
  }
}

function searchItem(item) {
  if (shoppingList.includes(item)) {
    console.log(`${item} está na lista.`);
  } else {
    console.log(`${item} não está na lista.`);
  }
}

function sortList() {
  shoppingList.sort();
  console.log('Lista ordenada.');
}

function displayList() {
  if (shoppingList.length === 0) {
    console.log('A lista está vazia.');
  } else {
    console.log('Lista de compras:');
    shoppingList.forEach(item => console.log(item));
  }
}

function clearList() {
  shoppingList = [];
  console.log('A lista foi limpa.');
}

function main() {
  let option;
  do {
    console.log('\nMenu:');
    console.log('1. Adicionar item');
    console.log('2. Remover item');
    console.log('3. Pesquisar item');
    console.log('4. Ordenar lista');
    console.log('5. Exibir lista');
    console.log('6. Limpar lista');
    console.log('7. Encerrar programa');

    option = parseInt(prompt('Escolha uma opção:'));

    switch (option) {
      case 1:
        const addItemName = prompt('Digite o nome do item a ser adicionado:');
        addItem(addItemName);
        break;
      case 2:
        const removeItemName = prompt('Digite o nome do item a ser removido:');
        removeItem(removeItemName);
        break;
      case 3:
        const searchItemName = prompt('Digite o nome do item a ser pesquisado:');
        searchItem(searchItemName);
        break;
      case 4:
        sortList();
        break;
      case 5:
        displayList();
        break;
      case 6:
        clearList();
        break;
      case 7:
        console.log('Encerrando o programa...');
        break;
      default:
        console.log('Opção inválida, tente novamente.');
    }
  } while (option !== 7);
}

main();