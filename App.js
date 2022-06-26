import React, {useEffect} from 'react';

// import {LaundryNavigator} from './components/navigation/LaundryNavigation';
import SplashScreen from 'react-native-splash-screen';
import store from './services/redux/Store';
import {Provider} from 'react-redux';
import Main from './Main';
import {extendTheme, NativeBaseProvider} from 'native-base';
import {COLORS} from './constants';

// import {setUser} from './services/redux/reducers/AuthSlice';

const App = () => {
  // const dispatch = useDispatch();
  const colorTheme = {
    primary: COLORS.primary,
    primaryDark: '#1B1464',
    primary_light: '#51A6D9',
    secondary: COLORS.secondary,
  };

  const theme = extendTheme({
    colors: colorTheme,
    fontConfig: {
      Poppins: {
        900: {
          normal: 'Poppins-Black',
        },
        800: {
          normal: 'Poppins-ExtraBold',
        },
        700: {
          normal: 'Poppins-Bold',
        },
        600: {
          normal: 'Poppins-SemiBold',
        },
        500: {
          normal: 'Poppins-Medium',
        },
        400: {
          normal: 'Poppins-Regular',
        },
        300: {
          normal: 'Poppins-light',
        },
      },
    },
    fonts: {
      heading: 'Poppins',
      body: 'Poppins',
      mono: 'Poppins',
    },
  });

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <Main />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
