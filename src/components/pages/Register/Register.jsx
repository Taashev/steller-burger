import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormValidation } from '../../../customHooks/useFormValidation';
import styles from './Register.module.css';
import { signUp } from '../../../utils/Api'; 
import { Link } from 'react-router-dom';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Preloader } from '../../Preloader/Preloader';

export function Register() {
	const [load, setLoad] = useState(false);
	
	// use form validation
	const {
		formValidity,
		values,
		errorMessages,
		onChangeInput,
		onBlurInput,
	} = useFormValidation({ name: '', email: '', password: '' });

	// history
	const history = useHistory();

	// on sumbit
	async function onSubmit(e) {
		e.preventDefault();
		const {email, password, name} = values;
		
		if (formValidity) {
			setLoad(true);

			try {
				const response = await signUp(email, password, name);
				response?.success && history.push('/login');
			} catch(err) {
				alert('Email уже занят');
				console.error(err);
			} finally {
				setLoad(false);
			}
		}
	};

	return (
		<section className={styles.register}>
			<div className={styles.container}>
				<h1 className={`text_type_main-medium ${styles.title}`}>Регистрация</h1>
				<form className={styles.form} onSubmit={onSubmit} name="register" noValidate>
					<label className={styles.group}>
						<Input
							type={'text'}
							placeholder={'Имя'}
							name={'name'}
							required
							minLength={2}
							onChange={onChangeInput}
							onBlur={onBlurInput}
							value={values.name}
							error={errorMessages.name ? true : false}
							errorText={errorMessages.name}
							size={'default'}
							extraClass={`${styles.input}`}
						/>
					</label>
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
					<label className={styles.group}>
						<PasswordInput
							name={'password'}
							required
							minLength={6}
							onChange={onChangeInput}
							onBlurCapture={onBlurInput}
							value={values.password}
							error={errorMessages.password ? true : false}
							errorText={errorMessages.password}
							extraClass={`${styles.input}`}
						/>
					</label>
					<Button htmlType="submit" extraClass={styles.button} type="primary" size="medium">
						{
							load
								? <Preloader width={20} height={20} />
								: 'Зарегистрироваться'
						}
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
