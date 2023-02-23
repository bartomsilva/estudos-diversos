modal("Aviso","dadops inválidos")

function modal(title, text) {
    smodal(title, text)
    const openModalButton = document.querySelector("#open-modal")
    const closeModalButton = document.querySelector("#close-modal")
    const modal = document.querySelector("#modal")
    const bfade = document.querySelector("#bfade")


    const toggleModal = () => {
        [modal, bfade].forEach((el) => el.classList.toggle('hide'))
    }

    [openModalButton, closeModalButton, bfade].forEach((el) => {
        el.addEventListener("click", () => toggleModal());
    });

    function smodal(title, text) {
        const bfade = `<div id="bfade" class="hide"></div>`
        const modal = `
    <div id="modal" class="hide">
        <div class="modal-header">
           <h2 id="modal-title">${title}</h2>
           <button id="close-modal">Fechar</button>
        </div>
        <div class="modal-body">
            <p id="modal-text">${text}</p>
        </div>
    </div>`
        const body = document.querySelector('body')
        body.innerHTML += bfade
        body.innerHTML += modal
    }
}
