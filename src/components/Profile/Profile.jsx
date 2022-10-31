import stylesProfile from './Profile.module.css';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function Profile() {
	return (
		<div className={`pt-4 pr-5 pb-4 pl-5 ${ stylesProfile.profile }`}>
			<ProfileIcon type="secondary" />
			Личный кабинет
		</div>
	);
};