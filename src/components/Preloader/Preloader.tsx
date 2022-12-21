import styles from './Preloader.module.css';

interface IPreloaderProps {
	width: string | number;
	height: string | number;
};

export const Preloader = ({ width, height }: IPreloaderProps) => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__container} style={{width, height}}>
        <div className={styles.preloader__item}><i></i></div>
        <div className={styles.preloader__item}><i></i></div>
      </div>
    </div>
  );
};
