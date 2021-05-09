import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import { Provider } from 'react-redux'
import { appStore } from './Redux/Store';

const store = appStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
