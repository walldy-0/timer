import styles from './Button.module.scss';

const Button = (props, onClick) => {
  return (
    <button className={styles.button} onClick={onClick}>{props.children}</button>
  );
};

export default Button;