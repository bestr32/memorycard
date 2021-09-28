import styles from './Scoreboard.module.css';

const Scoreboard = ({ score, highScore }) => {
  return (
    <div className={`${styles.score}`}>
      <p>Current Score: {score}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
};

export default Scoreboard;
