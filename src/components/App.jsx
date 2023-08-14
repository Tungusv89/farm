//sections:
import { Provider } from 'react-redux';
import CartIcon from './Cart-icon';
import Main from './Main';
import Cards from './Cards';
import Footer from './Footer';
import store from '../slices/index.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CartIcon />
        <Main />
        <Cards />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
