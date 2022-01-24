const sendForm = () => {
    const btnOpenModal = document.querySelector('.card-details__button_delivery')
    const cardDtailsTitle = document.querySelector('.card-details__title')
    const modal = document.querySelector('.modal')
    const modalTitle = document.querySelector('.modal__title')
    const modalClose = document.querySelector('.modal__close')
    const modalForm = document.querySelector('form')
    const modalSubmit = modal.querySelector('.modal__submit');

    btnOpenModal.addEventListener('click', () => {
        modal.style.display = 'flex'
        modalTitle.textContent = cardDtailsTitle.textContent
    })

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    modalSubmit.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modalForm.addEventListener('submit', (event) => {
        event.preventDefault()
        
        const label = modal.querySelectorAll('.modal__label')

        const sendMessege = {}

        label.forEach(label => {
            const span = label.querySelector('span')
            const input = label.querySelector('input')

            sendMessege[span.textContent] = input.value
        })

        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(sendMessege),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          
          .then(() => console.log('otpravleno'));
          event.target.reset();
    })

    
    



}

sendForm()