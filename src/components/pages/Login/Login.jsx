import { useState } from 'react';
import styles from './Login.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export function Login() {
	const [showPassword, setShowPassword] = useState(false);

	function onIconClickPassword() {
		setShowPassword(!showPassword);
	};

	return (
		<section className={styles.login}>
			<div className={styles.container}>
				<h1 className={`text_type_main-medium ${styles.title}`}>Вход</h1>
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
					<label className={styles.group}>
						<Input
							type={`${showPassword ? 'text' : 'password'}`}
							placeholder={'Пароль'}
							icon={`${showPassword ? 'HideIcon' : 'ShowIcon'}`}
							// onChange={e => setValue(e.target.value)}
							// value={value}
							name={'password'}
							error={false}
							// ref={inputRef}
							// onIconClick={onIconClick}
							errorText={'Ошибка'}
							size={'default'}
							onIconClick={onIconClickPassword}
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
						<span className={`${styles.link}`}> Зарегистрироваться</span>
					</p>
					<p className={styles.footer__text}>
						Забыли пароль?<span className={`${styles.link}`}> Восстановить пароль</span>
					</p>
				</div>
			</div>
		</section>
	)
};
