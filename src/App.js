import './App.css';
import Header from './Header';
import HeaderBanner from './HeaderBanner';
import Slider from './Slider';
import Product from './Product'
import ProductCategories from './ProductCategories';

function App() {
  return (
    <div className="app">
    <Header />
    <HeaderBanner />
    <Slider />
    <ProductCategories />
    <div className="app__body">
    <Product />
    </div>
    </div>
  );
}

export default App;
