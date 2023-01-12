import SimpleBar from 'simplebar-react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Order-details.module.css';

export function OrderDetails(): JSX.Element {
  return (
    <div className={styles.order}>
      <span className={`text_type_digits-default ${styles.order__number}`}>
        #034535
      </span>
      <h2 className={`text_type_main-medium ${styles.order__title}`}>
        Death Star Starship Main бургер
      </h2>
      <p className={styles.order__status}>Выполнен</p>
      <div className={styles.order__composition}>
        <p className={`text_type_main-medium ${styles.order__subtitle}`}>
          Состав:
        </p>
        <SimpleBar className={styles.simplebar}>
          <ul className={styles.order__ingredients}>
            <li className={styles.order__ingredient}>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02.png"
                alt="?"
              />
              <p className={styles['order__ingredinet-name']}>
                Флюоресцентная булка R2-D3
              </p>
              <p className={`text_type_digits-default ${styles.order__amount}`}>
                2 x 20 <CurrencyIcon type="primary" />
              </p>
            </li>
          </ul>
        </SimpleBar>
      </div>
      <div className={styles.order__footer}>
        <span className={styles.order__date}>Сегодня, 16:20</span>
        <div className={`text_type_digits-default ${styles.order__price}`}>
          <span>480</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
}
