import stylesNav from './Nav.module.css'
import { BurgerIcon, ListIcon  } from '@ya.praktikum/react-developer-burger-ui-components';

export function Nav() {
	return (
		<nav className={ stylesNav.nav }>
			<ul className={ stylesNav.list }>
				<li className={`pt-4 pr-5 pb-4 pl-5 mr-2 ${ stylesNav.item } ${ stylesNav.active }`}>
					<BurgerIcon type="secondary" />
					Конструктор
				</li>
				<li className={`pt-4 pr-5 pb-4 pl-5 ${ stylesNav.item }`}>
					<ListIcon type="secondary" />
					Лента заказов
				</li>
			</ul>
		</nav>
	);
};