import styles from './ForgotPassword.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export function ForgotPassword() {
	return (
		<section className={`${styles["forgot-password"]}`}>
			<div className={`${styles.container}`}>
				<h1 className={`text_type_main-medium ${styles.title}`}>Восстановление пароля</h1>
				<form className={styles.form}>
					<label className={styles.group}>
						<Input
							type={'email'}
							placeholder={'E-mail'}
							// onChange={e => setValue(e.target.value)}
							// value={value}
							name={'email'}
							error={false}
							// ref={inputRef}
							// onIconClick={onIconClick}
							errorText={'Ошибка'}
							size={'default'}
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
						<span className={`${styles.link}`}> Войти</span>
					</p>
				</div>
			</div>
		</section>
	);
};