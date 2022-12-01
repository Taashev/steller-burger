import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Profile.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export function Profile() {
	const [activeName, setActiveName] = useState(false);

	function onIconClickName() {
		setActiveName(!activeName);
	};
	function onBlurName() {
		setActiveName(false);
	};


	return (
		<section className={`${styles.profile}`}>
			<div className={`${styles.container}`}>
				<nav className={`${styles.navbar}`}>
					<h2 className={`text_type_main-default ${styles.info}`}>
						В этом разделе вы можете изменить свои персональные данные
					</h2>
					<ul className={`${styles.navbar__list}`}>
						<li className={`text_type_main-medium ${styles.navbar__item}`}>
							<NavLink className={`${styles.navbar__link}`} to="/profile" activeClassName={`${styles.navbar__link_active}`}>
								Профиль
							</NavLink>
						</li>
						<li className={`text_type_main-medium ${styles.navbar__item}`}>
							<NavLink className={`${styles.navbar__link}`} to="/profile/orders" activeClassName={`${styles.navbar__link_active}`}>
								История заказов
							</NavLink>
						</li>
						<li className={`text_type_main-medium ${styles.navbar__item}`}>
							<NavLink className={`${styles.navbar__link}`} to="/login">
								Выход
							</NavLink>
						</li>
					</ul>
				</nav>
				<form className={`${styles.form}`}>
					<label className={`${styles.group}`}>
						<Input
							type={'text'}
							placeholder={'Имя'}
							icon='EditIcon'
							name={'name'}
							disabled={!activeName}
							onIconClick={onIconClickName}
							onBlur={onBlurName}
							error={false}
							errorText={'Ошибка'}
							size={'default'}
							extraClass={`${styles.input}`}
						/>
					</label>
					<label className={`${styles.group}`}>
						<EmailInput
							name={'email'}
							placeholder="Логин"
							isIcon={true}
							extraClass={`${styles.input}`}
						/>
					</label>
					<label className={`${styles.group}`}>
						<PasswordInput
							name={'password'}
							icon="EditIcon"
							extraClass={`${styles.input}`}
						/>
					</label>
					<div className={`${styles.form__footer}`}>
						<Button htmlType="button" type="secondary" size="medium">
							Отмена
						</Button>
						<Button htmlType="button" type="primary" size="medium">
							Сохранить
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
};
