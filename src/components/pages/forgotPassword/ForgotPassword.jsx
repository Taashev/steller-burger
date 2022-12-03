import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { setForgotPassword } from '../../../utils/Api';
import { useFormValidation } from '../../../customHooks/useFormValidation';
import styles from './ForgotPassword.module.css';
import { Link } from 'react-router-dom';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Preloader } from '../../Preloader/Preloader';

export function ForgotPassword() {
	const history = useHistory();
	const [load, setLoad] = useState(false);

	const {
		formValidity,
		onChangeInput,
		onBlurInput,
		values,
		errorMessages
	} = useFormValidation({ email: '' });

	async function onSubmit(e) {
		e.preventDefault();
		
		if (formValidity) {
			setLoad(true);

			try {
				const response = await setForgotPassword(values.email);
				response?.success && history.push('/reset-password')
			} catch(err) {
				console.error(err);
			} finally {
				setLoad(false);
			}
		}
	};

	return (
		<section className={`${styles["forgot-password"]}`}>
			<div className={`${styles.container}`}>
				<h1 className={`text_type_main-medium ${styles.title}`}>Восстановление пароля</h1>
				<form className={styles.form} name="reset-password-email" onSubmit={onSubmit} noValidate>
					<label className={styles.group}>
						<EmailInput
							name={'email'}
							required
							onChange={onChangeInput}
							onBlur={onBlurInput}
							value={values.email}
							error={errorMessages.email ? true : false}
							errorText={errorMessages.email}
							isIcon={false}
							extraClass={`${styles.input}`}
						/>
					</label>
					<Button extraClass={styles.button} htmlType="submit" type="primary" size="medium">
						{
							load
								? <Preloader width={20} height={20} />
								: 'Восстановить'
						}
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