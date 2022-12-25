import { FormEvent, useState } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useFormValidation } from '../../../../customHooks/useFormValidation';

import { forgotPassword } from '../../../../services/actions/forgotPassword';

import { Preloader } from '../../../Preloader/Preloader';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ForgotPassword.module.css';

export function ForgotPassword() {
	const [load, setLoad] = useState<boolean>(false);

	const history = useHistory();
	const dispatch = useDispatch<any>();
	const user = useSelector((store: any) => store.userReducer.user);

	const {
		formValidity,
		onChangeInput,
		onBlurInput,
		values,
	} = useFormValidation({ email: '' });

	async function onSubmit(e: FormEvent) {
		e.preventDefault();
		
		if (formValidity) {
			setLoad(true);

			dispatch(forgotPassword(values.email))
				.then(() => history.push('/reset-password'))
				.finally(() => setLoad(false))
		}
	};

	if (user) {
		return <Redirect to="/" />
	}

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