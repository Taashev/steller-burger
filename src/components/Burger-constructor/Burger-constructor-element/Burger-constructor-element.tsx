import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd/dist/hooks';

import {
	setTotalPrice,
	removeTotalPrice
} from '../../../services/actions/totalPrice';
import {
	removeConstructorIngredient,
	updateConstructorIngredient
} from '../../../services/actions/constructorIngredients';
import { IIngredient } from '../../../services/types';

import {
	ConstructorElement,
	DragIcon
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './Burger-constructor-element.module.css';

interface BurgerConstructorElementProps {
	ingredient: IIngredient;
	id?: string;
	type?: 'top' | 'bottom';
	index?: number;
};

export function BurgerConstructorElement({
	ingredient,
	type,
	id,
	index
}: BurgerConstructorElementProps): JSX.Element {
	// props
	const { name, price, image } = ingredient;

	// ref
	const ref = useRef<HTMLLIElement | null>(null);

	// dispatch
	const dispatch = useDispatch<any>();

	// store
	const {
		constructorIngredients,
	} = useSelector((store: any): {
		constructorIngredients: [{ ingredient: IIngredient; id: string; }];
	} => store.constructorReducer);

	// component did update price
	useEffect(() => {
		dispatch(setTotalPrice(price));

		return () => dispatch(removeTotalPrice(price));
	}, [dispatch, price]);

	// drag
	const [{ isDragging }, drag] = useDrag({
		type: 'component',
		item: () => ({ id, index }),
		collect: monitor => ({
			isDragging: monitor.isDragging()
		})
	});
	
	// drop
	const [{ handlerId }, drop] = useDrop({
    accept: 'component',
    collect: monitor => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover(item: any, monitor: any) {
      if (!ref.current) {
        return
      }

      const dragIndex: number = item.index;
      const hoverIndex: number | undefined = index;
      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex! && hoverClientY > hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex! && hoverClientY > hoverMiddleY) {
        return
      }

      // onUpdateConstructor(dragIndex, hoverIndex);
      handlerUpdateConstructor(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

	const opacity: 0 | 1 = isDragging ? 0 : 1

	// handle update constructor
	const handlerUpdateConstructor = useCallback(
		(dragIndex: number, hoverIndex: number | undefined): void => {
			const dragCard = constructorIngredients[dragIndex];
			const newCards = [...constructorIngredients];
			newCards.splice(dragIndex, 1);
			newCards.splice(hoverIndex!, 0, dragCard);

			dispatch(updateConstructorIngredient(newCards));
}, [constructorIngredients, dispatch]);

	if (ingredient.type !== 'bun') drag(drop(ref));

	// remove ingredient
	function removeIngredient(): void {
		dispatch(removeConstructorIngredient(id));
	};

	return (
		<>
			{
				type
					?
						<ConstructorElement
							type={type}
							isLocked={true}
							text={`${name} ${type === 'top' ? '(верх)' : '(низ)'}`}
							price={price}
							thumbnail={image} />
					:
						<li
							ref={ref}
							className={`${styles.constructor__element}`}
							style={{ opacity }}
							onDrop={(e) => e.preventDefault()}
							data-handler-id={handlerId}
						>
							<DragIcon type="primary" />
							<ConstructorElement
								text={name}
								price={price}
								thumbnail={image}
								handleClose={removeIngredient} />
						</li>
				}
		</>
	);
};
