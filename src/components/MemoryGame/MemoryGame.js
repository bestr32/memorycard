import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import Scoreboard from './Scoreboard';
import SuccessModal from '../UI/SuccessModal';
import Cards from './Cards';

import styles from './MemoryGame.module.css';

const MemoryGame = () => {
  const [score, setScore] = React.useState(0);
  const [highScore, setHighScore] = React.useState(0);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  const cards = [
    { word: 'Alek', pressed: false },
    { word: 'Alke', pressed: false },
    { word: 'Akel', pressed: false },
    { word: 'Kale', pressed: false },
    { word: 'Kela', pressed: false },
    { word: 'Klea', pressed: false },
    { word: 'Elak', pressed: false },
    { word: 'Elka', pressed: false },
    { word: 'Ekal', pressed: false },
    { word: 'Lake', pressed: false },
    { word: 'Leka', pressed: false },
    { word: 'Leak', pressed: false },
  ];

  const increaseScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const closeSuccessModal = () => {
    resetScore();
  };

  return (
    <React.Fragment>
      {score === 12 &&
        ReactDOM.createPortal(
          <SuccessModal
            message='You won! Good job.'
            onClose={closeSuccessModal}
          />,
          document.getElementById('modal-root')
        )}

      {/* {ReactDOM.createPortal(
        <SuccessModal
          message='You won! Good job.'
          onClose={closeSuccessModal}
        />,
        document.getElementById('modal-root')
      )} */}
      <main className={`${styles.main}`}>
        <Scoreboard score={score} highScore={highScore} />
        <Cards
          cards={cards}
          onIncreaseScore={increaseScore}
          onResetScore={resetScore}
        />
      </main>
    </React.Fragment>
  );
};

export default MemoryGame;
