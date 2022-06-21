import React, {useEffect} from 'react';

// import {LaundryNavigator} from './components/navigation/LaundryNavigation';
import SplashScreen from 'react-native-splash-screen';
import store from './services/redux/Store';
import {Provider} from 'react-redux';
import Main from './Main';
import axios from 'axios';
// import {setUser} from './services/redux/reducers/AuthSlice';

const App = () => {
  // const dispatch = useDispatch();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
