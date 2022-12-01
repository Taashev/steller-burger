import styles from './ResetPassword.module.css';
import { Link } from 'react-router-dom';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export function ResetPassword() {
	return (
		<section className={`${styles["reset-password"]}`}>
			<div className={`${styles.container}`}>
				<h1 className={`text_type_main-medium ${styles.title}`}>Восстановление пароля</h1>
				<form className={styles.form}>
					<label className={styles.group}>
						<PasswordInput
							name={'password'}
							extraClass={`${styles.input}`}
						/>
					</label>
					<label className={styles.group}>
						<Input
							type={'text'}
							placeholder={'Введите код из письма'}
							name={'message'}
							error={false}
							errorText={'Ошибка'}
							size={'default'}
							extraClass={`${styles.input}`}
						/>
					</label>
					<Button extraClass={styles.button} htmlType="button" type="primary" size="medium">
						Сохранить
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
