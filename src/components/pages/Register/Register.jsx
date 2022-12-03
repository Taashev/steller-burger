import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormValidation } from '../../../customHooks/useFormValidation';
import styles from './Register.module.css';
import { signUp } from '../../../services/actions/register';
import { Link } from 'react-router-dom';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Preloader } from '../../Preloader/Preloader';

export function Register() {
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

	// dispatch
	const dispatch = useDispatch();

	// store
	const { registerRequest, registerSuccess } = useSelector((store) => store.registerReducer);

	// on sumbit
	async function onSubmit(e) {
		e.preventDefault();
		const {email, password, name} = values;

		if (formValidity) {
			await dispatch(signUp(email, password, name));
			registerSuccess && history.push('/login');
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
							registerRequest
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
