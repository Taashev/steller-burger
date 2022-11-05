import { useState } from "react"
import stylesTabs from './Tabs.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components"

export function Tabs() {
	const [current, setCurrent] = useState('bun');

	const setTab = (tab) => {
		setCurrent(tab);
		const element = document.querySelector(`#${tab}`);

		if (element) element.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className={`mb-10 ${stylesTabs.tabs}`}>
			<Tab value="bun" active={current === 'bun'} onClick={setTab}>
				Булки
			</Tab>
			<Tab value="sauce" active={current === 'sauce'} onClick={setTab}>
				Соусы
			</Tab>
			<Tab value="main" active={current === 'main'} onClick={setTab}>
				Начинки
			</Tab>
		</div>
	);
};