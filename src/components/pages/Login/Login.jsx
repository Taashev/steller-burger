import { useLocation, Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormValidation } from '../../../customHooks/useFormValidation';

import { Preloader } from '../../Preloader/Preloader';
import { signIn } from '../../../services/actions/login';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Login.module.css';

export function Login() {
	const { state } = useLocation();
	const dispatch = useDispatch();

	const user = useSelector((store) => store.userReducer.user);
	const loginRequest = useSelector((store) => store.loginReducer.loginRequest);

	const {
		formValidity,
		values,
		errorMessages,
		onChangeInput,
		onBlurInput,
	} = useFormValidation({ email: '', password: '' });

	function onSubmit(e) {
		e.preventDefault();
		
		if (formValidity) {
			dispatch(signIn(values.email, values.password));
		}
	};

	if (user) {
		return <Redirect
			to={ state?.from || '/' }
		/>
	}

	return (
		<section className={styles.login}>
			<div className={styles.container}>
				<h1 className={`text_type_main-medium ${styles.title}`}>Вход</h1>
				<form className={styles.form} onSubmit={onSubmit} name="login" noValidate>
					<label className={styles.group}>
						<Input
							type={'email'}
							placeholder={'E-mail'}
							name={'email'}
							required
							onChange={onChangeInput}
							onBlur={onBlurInput}
							value={values.email}
							error={errorMessages.email ? true : false}
							errorText={errorMessages.email}
							size={'default'}
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
					<Button extraClass={styles.button} htmlType="submit" type="primary" size="medium">
						{
							loginRequest
								? <Preloader width={20} height={20} />
								: 'Войти'
						}
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
	);
};
