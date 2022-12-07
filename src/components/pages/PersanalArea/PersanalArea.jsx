import { NavLink, Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';
import { Profile } from './Profile/Profile';

import styles from './PersanalArea.module.css';

export function PersanalArea() {
	const { path } = useRouteMatch();
	const { pathname } = useLocation();

	return (
		<section className={`${styles['personal-area']}`}>
			<div className={`${styles.container}`}>
				<nav className={`${styles.navbar}`}>
					{
						pathname === path && 
							<h2 className={`text_type_main-default ${styles.info}`}>
								В этом разделе вы можете изменить свои персональные данные
							</h2>
					}
					{
						pathname === `${path}/orders` && 
							<h2 className={`text_type_main-default ${styles.info}`}>
								В этом разделе вы можете посмотреть историю заказов
							</h2>
					}
					<ul className={`${styles.navbar__list}`}>
						<li className={`text_type_main-medium ${styles.navbar__item}`}>
							<NavLink className={styles.navbar__link} to={path} exact activeClassName={styles.navbar__link_active}>
								Профиль
							</NavLink>
						</li>
						<li className={`text_type_main-medium ${styles.navbar__item}`}>
							<NavLink className={styles.navbar__link} to={`${path}/orders`} activeClassName={styles.navbar__link_active}>
								История заказов
							</NavLink>
						</li>
						<li className={`text_type_main-medium ${styles.navbar__item}`}>
							<NavLink className={styles.navbar__link} to="/login">
								Выход
							</NavLink>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path={path} exact>
						<Profile />
					</Route>
					<Route path={`${path}/orders`}>
						Orders
					</Route>
				</Switch>
			</div>
		</section>
	);
};
