import styles from './ForgotPassword.module.css';
import { Link } from 'react-router-dom';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export function ForgotPassword() {
	return (
		<section className={`${styles["forgot-password"]}`}>
			<div className={`${styles.container}`}>
				<h1 className={`text_type_main-medium ${styles.title}`}>Восстановление пароля</h1>
				<form className={styles.form}>
					<label className={styles.group}>
						<EmailInput
							name={'email'}
							isIcon={false}
							extraClass={`${styles.input}`}
						/>
					</label>
					<Button extraClass={styles.button} htmlType="button" type="primary" size="medium">
						Восстановить
					</Button>
				</form>
				<div className={styles.footer}>
					<p className={`${styles.footer__text}`}>
						Вспомнили пароль?
						<Link className={`${styles.link}`} to="/login"> Войти</Link>
					</p>
				</div>
			</div>
		</section>
	);
};