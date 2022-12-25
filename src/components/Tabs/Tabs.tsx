// import PropTypes from 'prop-types';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components"
import stylesTabs from './Tabs.module.css';

interface ITabsProps {
	currentTab: string;
	setCurrentTab: (tab: string) => void;
};

export function Tabs({ currentTab, setCurrentTab }: ITabsProps): JSX.Element {
	const setTab = (tab: string): void => {
		setCurrentTab(tab);
		const element = document.querySelector(`#${tab}`);

		if (element) element.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className={`mb-10 ${stylesTabs.tabs}`}>
			<Tab value="bun" active={currentTab === 'bun'} onClick={setTab}>
				Булки
			</Tab>
			<Tab value="sauce" active={currentTab === 'sauce'} onClick={setTab}>
				Соусы
			</Tab>
			<Tab value="main" active={currentTab === 'main'} onClick={setTab}>
				Начинки
			</Tab>
		</div>
	);
};
