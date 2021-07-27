import Banner from '../components/Banner';
import Cart from '../components/Cart';
import ShoppingList from '../components/ShoppingList';
import Footer from '../components/Footer';

import '../App.scss';

const App = () => {
  return (
    <div className="App">
      <Banner />
      <Cart />
      <ShoppingList />
      <Footer />
    </div>

  );
}

export default App;
