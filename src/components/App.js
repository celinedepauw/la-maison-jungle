import Banner from '../components/Banner';
import Cart from '../components/Cart';
import ShoppingList from '../components/ShoppingList';

import '../App.scss';

const App = () => {
  return (
    <div className="App">
      <Banner />
      <Cart />
      <ShoppingList />
    </div>

  );
}

export default App;
