import { useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from '../../services/types/hooks';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { getUser } from '../../services/actions/user';
import { getIngredients } from '../../services/actions/ingredients';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';

import { ILocationState } from '../../services/types/locationState';

import { Main } from '../pages/Main/Main';
import { Column } from '../pages/Column/Column';
import { Orders } from '../pages/Orders/Orders';
import { OrderDetails } from '../Order-details/Order-details';
import { OrdersBoard } from '../pages/Orders-board/Orders-board';
import { TargetOrderDetails } from '../pages/Target-order-details/Target-order-details';
import { Preloader } from '../Preloader/Preloader';
import { AppHeader } from '../App-header/App-header';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { ForgotPassword } from '../pages/Login/forgotPassword/ForgotPassword';
import { ResetPassword } from '../pages/Login/ResetPassword/ResetPassword';
import { PersanalArea } from '../pages/PersanalArea/PersanalArea';
import { Modal } from '../Modal/Modal';
import { IngredientDetails } from '../Burger-ingredients/IngredientDetails/Ingredient-details';
import { TargetIngredient } from '../pages/TargetIngredient/TargetIngredient';

import { BurgerIngredients } from '../Burger-ingredients/Burger-ingredients';
import { BurgerConstructor } from '../Burger-constructor/Burger-constructor';

import stylesApp from './App.module.css';

function App(): JSX.Element {
  const history = useHistory();
  const location = useLocation<ILocationState>();
  const background: ILocationState | undefined = location.state?.background;

  const dispatch = useDispatch();
  const ingredientsRequest = useSelector(
    (store) => store.burgerIngredientsReducer.ingredientsRequest
  );

  function handleModalClose(): void {
    history.goBack();
  }

  // component did mount
  useEffect(() => {
    dispatch(getUser());
    dispatch(getIngredients());
    // TODO: dependencies array.length === 0
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`text text_type_main-default ${stylesApp.app}`}>
      {ingredientsRequest ? (
        <Preloader width="50px" height="50px" />
      ) : (
        <>
          <AppHeader />
          <Switch location={background || location}>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/reset-password" exact>
              <ResetPassword />
            </Route>
            <Route path="/forgot-password" exact>
              <ForgotPassword />
            </Route>
						<ProtectedRoute path="/profile/orders/:feedNumber" exact>
              <TargetOrderDetails />
            </ProtectedRoute>
            <ProtectedRoute path="/profile">
              <PersanalArea />
            </ProtectedRoute>
            <Route path="/feed" exact>
              <Main>
                <Column title="Лента заказов">
                  <Orders />
                </Column>
                <Column extraClass="pt-25 pl-15">
                  <OrdersBoard />
                </Column>
              </Main>
            </Route>
            <Route path="/" exact>
              <Main>
                <DndProvider backend={HTML5Backend}>
                  <Column title="Соберите бургер">
                    <BurgerIngredients />
                  </Column>
                  <Column extraClass="pt-25 pl-4">
                    <BurgerConstructor />
                  </Column>
                </DndProvider>
              </Main>
            </Route>
            <Route path="/ingredients/:ingredientId" exact>
              <TargetIngredient />
            </Route>
            <Route path="/feed/:feedNumber" exact>
              <TargetOrderDetails />
            </Route>
            <Route path="*">404 Not Found</Route>
          </Switch>

          {background && (
            <Switch>
              <Route
                path="/ingredients/:ingredientId"
                children={
                  <Modal title="Детали ингредиента" onClose={handleModalClose}>
                    <IngredientDetails />
                  </Modal>
                }
              />
              <Route
                path="/feed/:feedNumber"
                children={
                  <Modal onClose={handleModalClose}>
                    <OrderDetails />
                  </Modal>
                }
              />
              <ProtectedRoute
                path="/profile/orders/:feedNumber"
                children={
                  <Modal onClose={handleModalClose}>
                    <OrderDetails />
                  </Modal>
                }
              />
            </Switch>
          )}
        </>
      )}
    </div>
  );
}

export default App;
