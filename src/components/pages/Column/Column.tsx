import styles from './Column.module.css';

interface ColumnProps {
  children: JSX.Element;
  title?: string;
  extraClass?: string | undefined;
}

export function Column({
  title = '',
  extraClass,
  children,
}: ColumnProps): JSX.Element {
  return (
    <section className={`${styles.column} ${extraClass}`}>
      {title && <h1 className="text text_type_main-large mb-5">{title}</h1>}
      {children}
    </section>
  );
}
