import { useState, useEffect } from 'react';
import styles from './Timer.module.scss';

const Timer = () => {

  const [time, setTime] = useState(0);
  //const [startTime, setStartTime] = useState(0);
  const [timer, setTimer] = useState(undefined);
  //const [currentTime, setCurretTime] = useState(0);

  const getCurrentTime = () => (new Date()).getTime();

  const startClick = e => {
    e.preventDefault();

    const start = getCurrentTime();
    setTime(start);

    setTimer(setInterval(() => {
    setTime(() => getCurrentTime() - start);
    }, 100));
  };

  const stopClick = e => {
    e.preventDefault();
    
    if (timer) {
      clearInterval(timer);
    }
  };

  const resetClick = e => {
    e.preventDefault();
    
    setTime(0);
  };

  const formatTime = () => {

    return time;
  };

  return (
    <form className={styles.timerForm}>
      <h1>{formatTime()}</h1>
      <button onClick={startClick}>start</button>
      <button onClick={stopClick}>stop</button>
      <button onClick={resetClick}>reset</button>
    </form>
  );
};

export default Timer;