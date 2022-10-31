import stylesHeader from './App-header.module.css';
import { Nav } from '../Nav/Nav';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { Profile } from '../Profile/Profile';

export function AppHeader() {
	return (
		<header className={`p-4 ${ stylesHeader.header }`}>
			<div className={ stylesHeader.container }>
				<Nav />
				<div className={ stylesHeader.logo }>
					<Logo />
				</div>
				<Profile />
			</div>
		</header>
	);
};