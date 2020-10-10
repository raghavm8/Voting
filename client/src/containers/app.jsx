import React from 'react';
import decode from 'jwt-decode';
import api from '../services/api';
import {Provider} from 'react-redux';
import {store} from '../store';
import {setCurrentUser,addError,setToken} from '../store/actions/';
import Auth from '../components/auth';

if(localStorage.jwtToken){
    setToken(localStorage.jwtToken);
    try{
        store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
    }
    catch(err)
    {
        store.dispatch(setCurrentUser({}));
        store.dispatch(addError(err));
    }
}

const App = () => (
    <Provider store={store}>
        <div><Auth authType={'login'} /></div>
    </Provider>
);


/*class App extends Component{
   async componentDidMount(){
        const result = await api.call('post','auth/login',{
            username: 'username',
            password:'password'
        }); 
        console.log(result)
    }
    render(){
        return <div>
            App works
        </div>
    }
}*/
export default App;