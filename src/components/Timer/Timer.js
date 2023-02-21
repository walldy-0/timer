import styles from './Timer.module.scss';
import Button from '../Button/Button';

const Timer = props => {
    return (
      <form className={styles.timerForm}>
        <h1>00:00:00.000</h1>
        <Button>start</Button>
        <Button>stop</Button>
        <Button>reset</Button>
      </form>
    );
  };
  
  export default Timer;