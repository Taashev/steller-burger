import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import SimpleBar from 'simplebar-react';
import styles from './Order.module.css';

export function Order(): JSX.Element {
  return (
    <div className={styles.order}>
      <div className={styles.order__header}>
        <span className={`text_type_digits-default ${styles.order__number}`}>
          #034535
        </span>
        <span className={styles.order__date}>Сегодня, 16:20</span>
      </div>
      <p className={`text_type_main-medium ${styles.order__title}`}>
        Death Star Starship Main бургер
      </p>
      <div className={styles.order__footer}>
				<SimpleBar className={styles.simplebar} id="order_scroll">
					<ul className={styles.order__ingredients}>
						<li className={styles.order__ingredient}>
							<img src="https://code.s3.yandex.net/react/code/bun-02.png" alt="?" />
						</li>
					</ul>
				</SimpleBar>
        <div className={`text_type_digits-default ${styles.order__price}`}>
          <span>480</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
}
