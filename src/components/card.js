import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  let pageCard = document.createElement('div');
  pageCard.classList.add('card');
  let pageHeadline = document.createElement('div');
  pageHeadline.classList.add('headline');
  pageHeadline.textContent = article.headline;
  let pageAuthor = document.createElement('div');
  pageAuthor.classList.add('author');
  let pageImg = document.createElement('div');
  pageImg.classList.add('img-container');
  let img = document.createElement('img');
  img.src = article.authorPhoto;
  pageImg.appendChild(img);
  let name = document.createElement('span');
  name.textContent = `By ${article.authorName}`;

  pageCard.appendChild(pageHeadline);
  pageCard.appendChild(pageAuthor);
  pageCard.appendChild(pageImg);
  pageCard.appendChild(name);

  pageCard.addEventListener('click', function(event) {
    console.log(article.headline);
    console.log(article.headline, event);
  });
  
  return pageCard
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  let cardObject = '';
  axios.get('https://lambda-times-api.herokuapp/articles')
  .then((response) => {
    cardObject = response.data;
    cardObject.forEach(topic => {
      document.querySelector('.cards-container').appendChild(Card(topic));
    });
  })
}

export { Card, cardAppender }
