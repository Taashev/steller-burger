import styles from './Register.module.css';
import { Link } from 'react-router-dom';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export function Register() {
	return (
		<section className={styles.register}>
			<div className={styles.container}>
				<h1 className={`text_type_main-medium ${styles.title}`}>Регистрация</h1>
				<form className={styles.form}>
					<label className={styles.group}>
						<Input
							type={'text'}
							placeholder={'Имя'}
							name={'name'}
							error={false}
							errorText={'Ошибка'}
							size={'default'}
							extraClass={`${styles.input}`}
						/>
					</label>
					<label className={styles.group}>
						<EmailInput
							name={'email'}
							isIcon={false}
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
						Зарегистрироваться
					</Button>
				</form>
				<div className={`${styles.footer}`}>
					<p className={styles.footer__text}>
						Уже зарегистрированы?
						<Link className={`${styles.link}`} to="/login"> Войти</Link>
					</p>
				</div>
			</div>
		</section>
	);
};
