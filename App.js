import 'react-native-get-random-values';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native.js';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import MainNav from './src/navigation';
import { store } from './src/store';

//Initializing the SDK
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('myAppId');
Parse.serverURL = 'http://localhost:1337/parse';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MainNav />
      </PaperProvider>
    </Provider>
  );
}
