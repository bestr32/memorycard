import React from 'react';
import styles from './Cards.module.css';

const shuffleArray = (array) => {
  for (let k = 0; k < array.length; k++) {
    array.splice(Math.floor(Math.random() * array.length), 0, array.shift());
  }

  return array;
};

const Cards = ({ cards, onIncreaseScore, onResetScore }) => {
  const [cardsShuffled, setCardsShuffled] = React.useState(cards);

  const processClick = (word) => {
    for (let card of cardsShuffled) {
      if (card.word === word) {
        if (card.pressed === false) {
          card.pressed = true;
          onIncreaseScore();
        } else {
          onResetScore();
          setCardsShuffled(cards);
        }
      }
    }
    setCardsShuffled((prevCardsShuffled) => {
      return shuffleArray(prevCardsShuffled);
    });
  };

  return (
    <section className={`${styles.cards}`}>
      {cardsShuffled.map((card, idx) => (
        <button
          className={`${styles.btn}`}
          key={idx}
          onClick={() => {
            processClick(card.word);
          }}
        >
          {card.word}
        </button>
      ))}
    </section>
  );
};

export default Cards;
