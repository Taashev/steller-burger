import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormValidation } from '../../../../customHooks/useFormValidation';
import styles from './Profile.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export function Profile() {
	const [activeName, setActiveName] = useState(false);
	
	const { user } = useSelector((store) => store.loginReducer);

	const {
		formValidity,
		values,
		errorMessages,
		onChangeInput,
		onBlurInput,
	} = useFormValidation({ name: '', email: '', password: '' });

	function onIconClickName() {
		setActiveName(!activeName);
	};
	
	function onBlurName(e) {
		setActiveName(false);
		onBlurInput(e);
	};

	function onSubmit(e) {
		e.preventDefault();

		if (formValidity) {

		}
	};

	return (
		<form className={`${styles.form}`} name="profile" onSubmit={onSubmit} noValidate>
			<label className={`${styles.group}`}>
				<Input
					type={'text'}
					placeholder={'Имя'}
					icon='EditIcon'
					name={'name'}
					required
					minLength={2}
					disabled={!activeName}
					onIconClick={onIconClickName}
					onChange={onChangeInput}
					onBlur={onBlurName}
					value={values.name}
					error={errorMessages.name ? true : false}
					errorText={errorMessages.name}
					size={'default'}
					extraClass={`${styles.input}`}
				/>
			</label>
			<label className={`${styles.group}`}>
				<EmailInput
					name={'email'}
					required
					placeholder="Логин"
					onChange={onChangeInput}
					onBlurCapture={onBlurInput}
					value={values.email}
					error={errorMessages.email ? true : false}
					errorText={errorMessages.email}
					isIcon={true}
					extraClass={`${styles.input}`}
				/>
			</label>
			<label className={`${styles.group}`}>
				<PasswordInput
					name={'password'}
					required
					minLength={6}
					onChange={onChangeInput}
					onBlurCapture={onBlurInput}
					value={values.password}
					error={errorMessages.password ? true : false}
					errorText={errorMessages.password}
					icon="EditIcon"
					extraClass={`${styles.input}`}
				/>
			</label>
			<div className={`${styles.form__footer}`}>
				<Button htmlType="button" type="secondary" size="medium">
					Отмена
				</Button>
				<Button htmlType="submit" type="primary" size="medium">
					Сохранить
				</Button>
			</div>
		</form>
	);
};
