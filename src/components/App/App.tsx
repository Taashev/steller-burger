import { useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../services/actions/user';
import { getIngredients } from '../../services/actions/ingredients';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';

import { ILocationState } from '../../services/types/locationState';

import { Main } from '../Main/Main';
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

import stylesApp from './App.module.css';

function App(): JSX.Element {
  const history = useHistory();
  const location = useLocation<ILocationState>();
  const background: ILocationState | undefined = location.state?.background;

  const dispatch = useDispatch<any>();
  const ingredientsRequest = useSelector(
    (store: any): boolean => store.burgerIngredientsReducer.ingredientsRequest
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
            <ProtectedRoute path="/profile">
              <PersanalArea />
            </ProtectedRoute>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/ingredients/:ingredientId" exact>
              <TargetIngredient />
            </Route>
            <Route path="*">404 Not Found</Route>
          </Switch>

          {background && (
            <Route
              path="/ingredients/:ingredientId"
              children={
                <Modal title={'Детали ингредиента'} onClose={handleModalClose}>
                  <IngredientDetails />
                </Modal>
              }
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
