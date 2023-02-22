import { useState } from 'react';
import styles from './Timer.module.scss';
import Display from '../Display/Display';

const Timer = () => {

  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timer, setTimer] = useState(undefined);

  let prevTime = 0;

  const getCurrentTime = () => (new Date()).getTime();

  const startClick = e => {
    e.preventDefault();
    
    prevTime = getCurrentTime();

    setTimer(setInterval(() => {
      const currTime = getCurrentTime();
      const diff = currTime - prevTime;
      prevTime = currTime;

      setTimeElapsed(prev => prev + diff);
    }, 1));
  };

  const stopClick = e => {
    e.preventDefault();
    
    if (timer) {
      clearInterval(timer);
    }
  };

  const resetClick = e => {
    e.preventDefault();
    
    setTimeElapsed(0);
  };

  return (
    <div className={styles.timerForm}>
      <Display value={timeElapsed} />
      <button onClick={startClick}>start</button>
      <button onClick={stopClick}>stop</button>
      <button onClick={resetClick}>reset</button>
    </div>
  );
};

export default Timer;