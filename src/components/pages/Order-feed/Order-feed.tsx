import SimpleBar from 'simplebar-react';
import { Order } from '../../Order/Order';
import styles from './Order-feed.module.css';

export function OrderFeed(): JSX.Element {
  return (
    <SimpleBar className={styles.simplebar}>
      <div className={styles['order-feed']}>
        <Order id="1" />
      </div>
    </SimpleBar>
  );
}
