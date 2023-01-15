import styles from './Preloader.module.css';

interface IPreloaderProps {
  width: string | number;
  height: string | number;
  extraClass?: any;
}

export const Preloader = ({ width, height, extraClass }: IPreloaderProps) => {
  return (
    <div className={`${styles.preloader} ${extraClass}`}>
      <div className={styles.preloader__container} style={{ width, height }}>
        <div className={styles.preloader__item}>
          <i></i>
        </div>
        <div className={styles.preloader__item}>
          <i></i>
        </div>
      </div>
    </div>
  );
};
