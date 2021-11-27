import styles from './HintAndNext.module.css';

function HintAndNext() {
  return (
    <div>
      <button className={styles.btnHint}>hint</button>
      <button className={styles.btnNext}>Next Question</button>
    </div>
  );
}

export default HintAndNext;
