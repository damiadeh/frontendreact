import './App.scss';
import {StoreProvider } from './context/store';
import Home from './container/Home';

const App = () => {

  return (
    <StoreProvider>
      <Home />
    </StoreProvider>

  );
}

export default App;