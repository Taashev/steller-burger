import { useDispatch, useSelector } from '../../../services/types/hooks';

import { Order } from '../../Order/Order';

import SimpleBar from 'simplebar-react';

import { wsStart } from '../../../services/actions/wsAction';

import styles from './Orders.module.css';
import { useEffect } from 'react';
import { Preloader } from '../../Preloader/Preloader';

export function Orders(): JSX.Element {
  const { message, wsConnected } = useSelector((store) => store.WSReducer);
  const orders = message?.orders;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsStart());
  }, []);

  return (
    <>
      {!wsConnected ? (
        <Preloader width="50px" height="50px" />
      ) : (
        <SimpleBar className={styles.simplebar}>
          <div className={styles.orders}>
            {orders &&
              orders.map((order) => <Order key={order._id} order={order} />)}
          </div>
        </SimpleBar>
      )}
    </>
  );
}
