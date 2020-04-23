import React from 'react';
import { ThemeProvider } from 'styled-components';
import { PMain } from './pages/PMain';
import { LMain } from './layouts/LMain'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

const theme = {
  colors: {
    primary: {
      background: "#1976d2",
      text: '#ffffff'
    },
    secondary: '#fbc02d'
  }
}
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <LMain>
            <PMain></PMain>
          </LMain>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
