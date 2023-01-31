import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../../../services/types/hooks';
import {
  wsHistoryOrdersDisconnected,
  wsHistoryOrdersStart,
} from '../../../../services/actions/wsHistoryOrdersAction/wsHistoryOrdersAction';

import SimpleBar from 'simplebar-react';
import { Order } from '../../../Order/Order';

import styles from './History-orders.module.css';
import { Preloader } from '../../../Preloader/Preloader';

export function HistoryOrders() {
  const dispatch = useDispatch();
  const { message, wsConnected } = useSelector(
    (store) => store.WSHistoryOrdersReducer
  );

  useEffect(() => {
    dispatch(wsHistoryOrdersStart());
    return () => dispatch(wsHistoryOrdersDisconnected());
    // TODO: dependencies array.length === 0
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!wsConnected ? (
        <Preloader extraClass={styles.preloader} width="40px" height="40px" />
      ) : (
        <SimpleBar className={styles.simplebar}>
          <div className={styles.history}>
            {message?.orders.map((order) => (
              <Order key={order._id} order={order} historyOrder={true} />
            ))}
          </div>
        </SimpleBar>
      )}
    </>
  );
}
