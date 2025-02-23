import React from 'react';
import styles from './Options.module.css';

function Options({ options, onLeaveFeedback, totalFeedback, onReset }) {
  return (
    <div className={styles.options}>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button onClick={onReset} className={styles.reset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
