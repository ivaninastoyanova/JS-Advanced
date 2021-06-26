function solve(){
   const button = document.querySelector('button');
   button.addEventListener('click' , onClick)
   let posts = document.querySelector('main>section');

   function onClick(event){

      event.preventDefault();
      
      //get data
      const author = document.getElementById('creator').value;
      const title = document.getElementById('title').value;
      const category = document.getElementById('category').value;
      const content = document.getElementById('content').value;
      
      //CREATE AND APPEND
      //article
      let article = document.createElement('article');

      //h1
      let h1 = document.createElement('h1');
      h1.textContent = title;
      article.appendChild(h1);

      //category paragraph
      let categoryParagraph = document.createElement('p');
      categoryParagraph.textContent = 'Category:';
      let strong1 = document.createElement('strong');
      strong1.textContent = category;
      categoryParagraph.appendChild(strong1);
      article.appendChild(categoryParagraph);

      //creator paragraph
      let creatorParagraph = document.createElement('p');
      creatorParagraph.textContent = 'Creator:';
      let strong2 = document.createElement('strong');
      strong2.textContent = author;
      creatorParagraph.appendChild(strong2);
      article.appendChild(creatorParagraph);

      //content paragraph
      let contentParagraph = document.createElement('p');
      contentParagraph.textContent = content;
      article.appendChild(contentParagraph);

      //div with 2 buttons
      let div = document.createElement('div');
      div.setAttribute('class' , 'buttons');

      let deleteButton = document.createElement('button');
      deleteButton.setAttribute('class' , 'btn delete');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click',onClickDelete);
      div.appendChild(deleteButton);

      let archiveButton = document.createElement('button');
      archiveButton.setAttribute('class' , 'btn archive');
      archiveButton.textContent = 'Archive';
      archiveButton.addEventListener('click',onClickArchive);

      div.appendChild(archiveButton);
      article.appendChild(div);

      posts.appendChild(article);


      function onClickArchive (event) {
         let placeToMoveArticle = document.querySelector('.archive-section>ol');
         let liElement = document.createElement('li');
         let articleToMove = event.target.parentNode.parentNode;
         let titleOfArticle = articleToMove.querySelector('h1').textContent;
         liElement.textContent = titleOfArticle;
         placeToMoveArticle.appendChild(liElement);
         articleToMove.remove();

         //sort 
         let olElement = document.getElementsByTagName('ol')[0];
         Array.from(olElement.getElementsByTagName("li"))
         .sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach(li => olElement.appendChild(li));
      }

      function onClickDelete (event) {
        event.target.parentNode.parentNode.remove();
      }
   }
  }
