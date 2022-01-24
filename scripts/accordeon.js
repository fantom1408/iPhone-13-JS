const accordeon = () => {
  const chItems = document.querySelectorAll('.characteristics__item');


         const closeActiveItem = (e) => {
    chItems.forEach((clickedItem) => {
      const clickedChButton = clickedItem.querySelector(
        ".characteristics__title"
      );
      const clickedChContent = clickedItem.querySelector(
        ".characteristics__description"
      );

      if (
        clickedChButton.classList.contains("active") &&
        !clickedChButton.isEqualNode(e.target)
      ) {
        clickedChContent.style.height = "";
        clickedChButton.classList.remove("active");
        clickedChContent.classList.remove("open");
      }
    });
  };


  chItems.forEach((item) => {
    const chButton = item.querySelector('.characteristics__title');
    const chContent = item.querySelector('.characteristics__description');

    chButton.addEventListener('click', (e) => {
      closeActiveItem(e)
      if (chContent.classList.contains('open')) {
        chContent.style.height = '';
      } else {
          
        chContent.style.height = chContent.scrollHeight + 'px';
      }
      chButton.classList.toggle('active')
      chContent.classList.toggle('open');
    });
  });
};

accordeon();
