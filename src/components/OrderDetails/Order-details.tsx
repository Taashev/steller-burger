import { useSelector } from '../../services/types/hooks';
import styles from './Order-details.module.css';
import img from '../../images/svg/graphics.svg';

export function OrderDetails() {
  const orderId = useSelector((store) => store.orderDetailsReducer.orderId);

  return (
    <div className={`pt-4 pb-15 ${styles['order-details']}`}>
      <div className={`text_type_digits-large mb-8`}>{orderId}</div>
      <span className={`text_type_main-medium mb-15`}>
        идентификатор заказа
      </span>
      <img
        className={`${styles['order-details__img']}`}
        src={img}
        alt="заказ готов"
      />
      <span className={`mt-15`}>Ваш заказ начали готовить</span>
      <span className={`mt-2 ${styles['order-details__text']}`}>
        Дождитесь готовности на орбитальной станции
      </span>
    </div>
  );
}
