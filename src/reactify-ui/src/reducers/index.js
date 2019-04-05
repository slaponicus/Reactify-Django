import { combineReducers } from 'redux';

const myApp = combineReducers({
	//reducters go here
})

const rootReducer = (state, action) => {

	if ( action.type === 'AUTHENTICATION_ERROR' || action.type === 'LOGOUT_SUCCESSFUL' ) {
		state = undefined;
	}
	return myApp(state, action);
}

export default rootReducer;
