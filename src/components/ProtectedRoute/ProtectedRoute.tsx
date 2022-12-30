import { ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from '../../services/types/hooks';

interface ProtectedRouteProps {
  [name: string]: any;
  children: ReactNode;
}

export function ProtectedRoute({
  children,
  ...props
}: ProtectedRouteProps): JSX.Element {
  const user = useSelector((store) => store.userReducer.user);

  return (
    <Route
      {...props}
      render={({ location }) => {
        return user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
