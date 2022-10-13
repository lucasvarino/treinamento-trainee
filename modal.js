const fadeModal = document.getElementById("fadeModal"); //Pegar a div de fade
const buttons = document.getElementsByClassName("botao") //Pegar todos os botões da página - Retorna um HTMLCollection
const buttonsModal = [...buttons].filter((el) => { //Spread para criar um array de elementos, filter para pegar apenas os botões que abrem modais
  return el.dataset.modal != null // Se tiver o data-modal, estará no array buttonsModal
})

const modalCurrent = () => { // Função para pegar o modal que atualmente está aberto
  const modal = document.getElementsByClassName("modal-p"); //Pegar todos os modais da página - Retorna um HTMLCollection
  const modalOpen = [...modal].filter((modal) => { //Filter para pegar apenas o modal que está aberto, retorna um array
    return !modal.classList.contains("hide"); //Se não tiver a classe hide, pegamos essa div
  })

  return modalOpen[0]; //Como só teremos um modal aberto por vez, podemos pegar apenas o primeiro item do array
}

const toggleModal = (el) => { //Função para esconder/exibir o modal - Recebe como parâmetro o id do modal a ser aberto ou undefined
  if(el == undefined) { //Se o id for undefined, estamos passando um botão de fechar ou o fade
    fadeModal.classList.toggle("hide") //Escondemos o fade
    const currentModal = modalCurrent(); //Pegamos o modal atual com a função feita anteriormente
    currentModal.classList.toggle("hide") //Escondemos o modal
  } else {
    const modalOpen = document.getElementById(el); //Pega o modal do botão através da propriedade data-modal
    modalOpen.classList.toggle("hide"); //Esconde/Exibe modal
    fadeModal.classList.toggle("hide"); //Esconde/Exibe o fade
  }
}

[...buttonsModal, fadeModal].forEach((el) => { //Criamos um array com os botões e o fade, já que precisamos adicionar o evento de click em ambos
  el.addEventListener("click", () => toggleModal(el.dataset.modal)) //Adiciona o evento de click, ou seja, ao clicar nos elementos, executamos a função toggleModal
})

