function solution() {
    const addGiftButton = document.querySelector('body > div > section:nth-child(1) > div > button');
    addGiftButton.addEventListener('click' , onClick);


    function onClick(event){
      event.preventDefault();
    
      let giftName = document.querySelector('body > div > section:nth-child(1) > div > input[type=text]').value ;
      let ulContainer = document.querySelector('body > div > section:nth-child(2) > ul');

      let liElement = document.createElement('li');
      liElement.textContent= giftName;
      liElement.classList.add("gift");

      let sendButton = document.createElement('button');
      sendButton.textContent = 'Send';
      sendButton.classList.add("sendButton");
      //sendButton.id = "sendButton";
      sendButton.addEventListener('click', onSendButton);
      liElement.appendChild(sendButton);

      let discardButton = document.createElement('button');
      discardButton.textContent = 'Discard';
      discardButton.classList.add("discardButton");
      //discardButton.id = "discardButton";
      discardButton.addEventListener('click', onDiscardButton);
      liElement.appendChild(discardButton);

      ulContainer.appendChild(liElement);

      //order alphabetically!
      Array.from(ulContainer.getElementsByTagName("li"))
      .sort((a,b) => a.textContent.localeCompare(b.textContent))
      .forEach(li => ulContainer.appendChild(li));;
      
      //clear input field
      document.querySelector('body > div > section:nth-child(1) > div > input[type=text]').value = '';


      function onSendButton (event){

        let ulContainerSentGifts = document.querySelector('div > section:nth-child(3) > ul');
        let liItem = document.createElement('li');
        liItem.textContent=(event.target.parentNode.textContent).replace('SendDiscard','');  
        ulContainerSentGifts.appendChild(liItem);
        
        //remove gift LI
        event.target.parentNode.remove();
      }

      function onDiscardButton (event){

        let ulContainerDiscardedGifts=document.querySelector('div > section:nth-child(4) > ul');
        let liItem=document.createElement('li');
        liItem.textContent=(event.target.parentNode.textContent).replace('SendDiscard','');  
        ulContainerDiscardedGifts.appendChild(liItem);
        
        //remove gift LI
        event.target.parentNode.remove();
      }
    }
}