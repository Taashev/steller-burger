import { useEffect, useState, useReducer, useCallback } from 'react';
import stylesApp from './App.module.css';

import {
	IsLoadingContext,
	IngredientsContext,
	TotalPriceContext,
	BurgerConstructorContext,
} from '../../contexts/appContext';
import { Main } from '../Main/Main';
import { getIngredients } from '../../utils/Api';
import { Preloader } from '../Preloader/Preloader';
import { AppHeader } from '../App-header/App-header';

const totalPriceInitial = { price: 0 };

function App() {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ ingredients, setIngredients ] = useState(null);
	const [ burgerConstructor, setBurgerConstructor ] = useState(null);
	const [ totalPriceState, totalPriceDispatch ] = useReducer(totalPriceReducer, totalPriceInitial);

	function totalPriceReducer(state, action) {
		switch(action.type) {
			case 'set':
				return { price: state.price + action.payload };
			case 'remove':
				return { price: state.price - action.payload };
			case 'reset':
				return { price: action.payload };
			default:
				throw new Error(`Wrong type of action ${action.type}`);
		}
	};

	// handle loading timer
	const isLoadingTimer = useCallback((time=0) => {
    setIsLoading(true);
    setTimeout(_ => { setIsLoading(false) }, [time]);
  }, [setIsLoading]);

	// component did mount
	useEffect(() => {
		getIngredients()
			.then((res) => {
				setIngredients(res.data);
				setBurgerConstructor(res.data);
			})
			.catch((err) => console.error(err))
			.finally(_ => {isLoadingTimer(1000)})
	// TODO: dependencies array.length === 0
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

  return (
		<div className={`text text_type_main-default ${stylesApp.app}`}>
			<IngredientsContext.Provider value={{ ingredients, setIngredients }}>
				<TotalPriceContext.Provider value={{ totalPriceState, totalPriceDispatch }}>
					<IsLoadingContext.Provider value={{ isLoading, setIsLoading, isLoadingTimer }}>
						<BurgerConstructorContext.Provider value={{ burgerConstructor, setBurgerConstructor }}>
							{
								isLoading
									?
										<Preloader width={50} height={50} />
									:
										<>
											<AppHeader />
											<Main />
										</>
							}
						</BurgerConstructorContext.Provider>
					</IsLoadingContext.Provider>
				</TotalPriceContext.Provider>
			</IngredientsContext.Provider>
		</div>
  );
};

export default App;
