import styles from './Question1.module.css';

function Question() {
  return (
    <div>
      <h1 className={styles.title}> Question 1 </h1>
        <p className={styles.question}>
          {' '}
          Which of these two images is a scam?
        </p>
    </div>
  );
}

export default Question;
