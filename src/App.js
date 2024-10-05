import { Card } from 'react-bootstrap';
import './App.css';
import  './components/Cheezious'
import Cheezious from './components/Cheezious';
import Product from './pages/Product';
function App() {
  return (
  <div>
    <Cheezious/>
    <Product/>   
  </div>    
  );
}

export default App;
