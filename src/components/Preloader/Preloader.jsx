import styles from './Preloader.module.css';

export const Preloader = ({ width='', height='' }) => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__container} style={{width, height}}>
        <div className={styles.preloader__item}><i></i></div>
        <div className={styles.preloader__item}><i></i></div>
      </div>
    </div>
  )
};
