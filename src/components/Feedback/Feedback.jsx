import React from 'react';
import styles from './Feedback.module.css';

function Feedback({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={styles.feedback}>
      <h2>Feedback Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
}

export default Feedback;
