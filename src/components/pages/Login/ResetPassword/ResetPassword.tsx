import { useState } from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFormValidation } from '../../../../customHooks/useFormValidation';

import { setResetPassword } from '../../../../utils/Api';

import { Preloader } from '../../../Preloader/Preloader';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ResetPassword.module.css';

export function ResetPassword() {
	const [load, setLoad] = useState<boolean>(false);
	const history = useHistory();

	const forgotPasswordSuccess = useSelector((store: any) =>
		store.forgotPasswordReducer.forgotPasswordSuccess
	);

	const {
		formValidity,
		values,
		onChangeInput,
		onBlurInput,
	} = useFormValidation({ password: '', message: '' });

	async function onSubmit(e: any) {
		e.preventDefault();

		if (formValidity) {
			setLoad(true);

			try {
				const response = await setResetPassword(values.password, values.message);
				response?.success && history.push('/login');
			} catch(err) {
				console.error(err);
			} finally {
				setLoad(false);
			}
		}
	};

	if (!forgotPasswordSuccess) {
		return <Redirect to="/forgot-password" />
	}

	return (
		<section className={`${styles["reset-password"]}`}>
			<div className={`${styles.container}`}>
				<h1 className={`text_type_main-medium ${styles.title}`}>Восстановление пароля</h1>
				<form className={styles.form} name="reset-password" onSubmit={onSubmit} noValidate>
					<label className={styles.group}>
						<PasswordInput
							name={'password'}
							required
							minLength={6}
							onChange={onChangeInput}
							onBlurCapture={onBlurInput}
							value={values.password}
							extraClass={`${styles.input}`}
						/>
					</label>
					<label className={styles.group}>
						<Input
							type={'text'}
							placeholder={'Введите код из письма'}
							name={'message'}
							required
							onChange={onChangeInput}
							value={values.message}
							size={'default'}
							extraClass={`${styles.input}`}
						/>
					</label>
					<Button extraClass={styles.button} htmlType="submit" type="primary" size="medium">
						{
							load
								? <Preloader width={20} height={20} />
								: 'Сохранить'
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
