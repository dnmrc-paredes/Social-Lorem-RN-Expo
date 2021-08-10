import React from 'react';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

// Main Navigator
import { MainNavigator } from './navigation';

// Store
import { persistor, store } from './redux';

const App = () => {

  const [loaded] = useFonts({
    opsLight: require('./assets/fonts/OpenSans-Light.ttf'),
    opsReg: require('./assets/fonts/OpenSans-Regular.ttf'),
    opsSemi: require('./assets/fonts/OpenSans-SemiBold.ttf'),
    opsBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    opsBolder: require('./assets/fonts/OpenSans-ExtraBold.ttf')
  })

  if (!loaded) {
    return <AppLoading/>
  }

  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
        <MainNavigator/>
      </PersistGate>
    </Provider>
  )

}

export default App