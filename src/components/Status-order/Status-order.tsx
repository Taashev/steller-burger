import styles from './Status-order.module.css';

interface StatusOrderProps {
  status: string | undefined;
  extraClass?: any;
}

export function StatusOrder({
  status,
  extraClass = '',
}: StatusOrderProps): JSX.Element {
  const { mod, text } =
    status === 'created'
      ? { mod: 'status_created', text: 'Готовим' }
      : status === 'pending'
      ? { mod: 'status_pending', text: 'В ожидании' }
      : status === 'done'
      ? { mod: 'status_done', text: 'Выполнен' }
      : { mod: 'status_canceled', text: 'Отменен' };

  return (
    <p className={`${styles.status} ${styles[mod]} ${extraClass}`}>{text}</p>
  );
}
