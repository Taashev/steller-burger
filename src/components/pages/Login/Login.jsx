import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export function Login() {
	return (
		<section className={styles.login}>
			<div className={styles.container}>
				<h1 className={`text_type_main-medium ${styles.title}`}>Вход</h1>
				<form className={styles.form}>
					<label className={styles.group}>
						<Input
							type={'email'}
							placeholder={'E-mail'}
							name={'email'}
							error={false}
							errorText={'Ошибка'}
							size={'default'}
							extraClass={`${styles.input}`}
						/>
					</label>
					<label className={styles.group}>
						<PasswordInput
							name={'password'}
							extraClass={`${styles.input}`}
						/>
					</label>
					<Button extraClass={styles.button} htmlType="button" type="primary" size="medium">
						Войти
					</Button>
				</form>
				<div className={styles.footer}>
					<p className={`${styles.footer__text}`}>
						Вы — новый пользователь?
						<Link className={`${styles.link}`} to="/register"> Зарегистрироваться</Link>
					</p>
					<p className={styles.footer__text}>
						Забыли пароль?
						<Link className={`${styles.link}`} to="/forgot-password"> Восстановить пароль</Link>
					</p>
				</div>
			</div>
		</section>
	)
};
