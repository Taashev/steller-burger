import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function ProtectedRoute({ children, ...props }) {
	const user = useSelector((store) => store.userReducer.user);

	return (
		<Route 
			{...props}
			render={({ location }) => {
				return user
					?  children
					: <Redirect
							to={{
								pathname: '/login',
								state: { from: location },
							}}
						/>
				}
			}
		/>
	);
};
