import { combineReducers } from 'redux';
import error from './errors';
import auth from './auth';

/*const DEFAULT_STATE = {
    error:{
        message:null
    }
};*/
         
export default combineReducers({
    auth,
    error
}); 