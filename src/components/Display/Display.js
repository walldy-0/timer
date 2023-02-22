import styles from './Display.module.scss';

const Display = props => {
  
  const formatTime = () => {
    const totalMiliseconds = props.value;

    const miliseconds = totalMiliseconds % 1000;
    const seconds = Math.floor((totalMiliseconds / 1000) % 60);
    const minutes = Math.floor((totalMiliseconds / 1000 / 60) % 60);
    const hours = Math.floor((totalMiliseconds / 1000 / 60 / 60) % 24);

    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0'),
      miliseconds.toString().padStart(3, '0')
    ].join(':');
  };

  return (
    <h1 className={styles.display}>{formatTime()}</h1>
  );
};

export default Display;