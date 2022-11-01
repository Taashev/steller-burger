import { useState } from "react"
import stylesTabs from './Tabs.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components"

export function Tabs() {
	const [current, setCurrent] = useState('one');

	return (
		<div className={`mb-10 ${ stylesTabs.tabs }`}>
			<Tab value="one" active={current === 'one'} onClick={setCurrent}>
				Булки
			</Tab>
			<Tab value="two" active={current === 'two'} onClick={setCurrent}>
				Соусы
			</Tab>
			<Tab value="three" active={current === 'three'} onClick={setCurrent}>
				Начинки
			</Tab>
		</div>
	);
};