import { memo } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import stylesHeader from './App-header.module.css';
import {
	BurgerIcon,
	ListIcon,
	Logo,
	ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

export const AppHeader = memo(_ => {
	const { path, isExact } = useRouteMatch();
	const isPathNameOrders = useRouteMatch(`${path}orders`);
	const isPathNameProfile = useRouteMatch(`${path}profile`);

	return (
		<header className={`p-4 ${ stylesHeader.header }`}>
			<div className={ stylesHeader.container }>
				<nav>
					<ul className={ stylesHeader.nav__list }>
						<li className={`pt-4 pr-5 pb-4 pl-5 mr-2`}>
							<NavLink className={`${stylesHeader.nav__link}`} to={path} exact activeClassName={stylesHeader.active}>
								<BurgerIcon type={isExact ? 'primary' : 'secondary'} />
								Конструктор
							</NavLink>
						</li>
						<li className={`pt-4 pr-5 pb-4 pl-5`}>
							<NavLink className={`${stylesHeader.nav__link}`} to={`${path}orders`} activeClassName={stylesHeader.active}>
								<ListIcon type={isPathNameOrders ? 'primary' : 'secondary'} />
								Лента заказов
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className={ stylesHeader.logo }>
					<Logo />
				</div>
				<div className={`pt-4 pr-5 pb-4 pl-5`}>
					<NavLink className={`${stylesHeader.nav__link}`} to={`${path}profile`} activeClassName={stylesHeader.active}>
						<ProfileIcon type={isPathNameProfile ? 'primary' : 'secondary'} />
						Личный кабинет
					</NavLink>
				</div>
			</div>
		</header>
	);
});
