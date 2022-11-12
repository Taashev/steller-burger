import { memo } from 'react';
import stylesHeader from './App-header.module.css';
import {
	BurgerIcon,
	ListIcon,
	Logo,
	ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

export const AppHeader = memo(_ => {
	return (
		<header className={`p-4 ${ stylesHeader.header }`}>
			<div className={ stylesHeader.container }>
				<nav>
					<ul className={ stylesHeader.nav__list }>
						<li className={`pt-4 pr-5 pb-4 pl-5 mr-2`}>
							<a className={`${stylesHeader.nav__link} ${ stylesHeader.active }`} href='#'>
								<BurgerIcon type="secondary" />
								Конструктор
							</a>
						</li>
						<li className={`pt-4 pr-5 pb-4 pl-5`}>
							<a className={`${stylesHeader.nav__link}`} href='#'>
								<ListIcon type="secondary" />
								Лента заказов
							</a>
						</li>
					</ul>
				</nav>
				<div className={ stylesHeader.logo }>
					<Logo />
				</div>
				<div className={`pt-4 pr-5 pb-4 pl-5`}>
					<a className={`${stylesHeader.nav__link}`} href='#'>
						<ProfileIcon type="secondary" />
						Личный кабинет
					</a>
				</div>
			</div>
		</header>
	);
});