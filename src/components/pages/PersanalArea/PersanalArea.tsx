import {
  NavLink,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
import { useDispatch } from '../../../services/types/hooks';

import { logout } from '../../../services/actions/logout';
import { ILocationState } from '../../../services/types/locationState';

import { Profile } from './Profile/Profile';
import { HistoryOrders } from './History-orders/History-orders';
import styles from './PersanalArea.module.css';

export function PersanalArea(): JSX.Element {
  const { path } = useRouteMatch();
  const dispatch: any = useDispatch();
  const location = useLocation<ILocationState>();

  function onClickLogout() {
    dispatch(logout());
  }

  return (
    <section className={`${styles['personal-area']}`}>
      <div className={`${styles.container}`}>
        <nav className={`${styles.navbar}`}>
          {location.pathname === path && (
            <h2 className={`text_type_main-default ${styles.info}`}>
              В этом разделе вы можете изменить свои персональные данные
            </h2>
          )}
          {location.pathname === `${path}/orders` && (
            <h2 className={`text_type_main-default ${styles.info}`}>
              В этом разделе вы можете посмотреть свою историю заказов
            </h2>
          )}
          <ul className={`${styles.navbar__list}`}>
            <li className={`text_type_main-medium ${styles.navbar__item}`}>
              <NavLink
                className={styles.navbar__link}
                to={path}
                exact
                activeClassName={styles.navbar__link_active}
              >
                Профиль
              </NavLink>
            </li>
            <li className={`text_type_main-medium ${styles.navbar__item}`}>
              <NavLink
                className={styles.navbar__link}
                to={`${path}/orders`}
                activeClassName={styles.navbar__link_active}
              >
                История заказов
              </NavLink>
            </li>
            <li className={`text_type_main-medium ${styles.navbar__item}`}>
              <button
                className={`${styles.navbar__button}`}
                onClick={onClickLogout}
              >
                Выход
              </button>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path={`${path}/orders`} exact>
            <HistoryOrders />
          </Route>
          <Route path={path} exact>
            <Profile />
          </Route>
        </Switch>
      </div>
    </section>
  );
}
