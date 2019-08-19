fetch('/.netlify/functions/getUsers')
  .then(res => res.json())
  .then(data => {
    data.forEach(user => {
      // create card
      let card = document.createElement('div'),
          card_body  = document.createElement('div'),
          card_title = document.createElement('h5'),
          card_text  = document.createElement('p');

      // add classes
      card.classList.add('card');
      card_body.classList.add('card-body');
      card_title.classList.add('card-title');
      card_text.classList.add('card-text');

      // get info from data
      card_title.textContent = user.name;
      card_text.textContent = user.email;
      
      // append to card
      card_body.appendChild(card_title);
      card_body.appendChild(card_text);
      card.appendChild(card_body);
      
      // append card to body 
      document.body.appendChild(card)
    });
  })
  .catch(error => console.log(error))