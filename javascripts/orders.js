const modalByDelete = document.querySelector('#deleteModal');
modalByDelete.addEventListener('show.bs.modal' , function(event) {
    const button = event.relatedTarget;
    const orderId = button.dataset.bsOrderId;
    const modalText = modalByDelete.querySelector('#deleteText');
    modalText.textContent = orderId;
})