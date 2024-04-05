import './App.css'
import products from './assets/data.js';
import Nav from './components/nav/Nav.jsx';
import Header from './components/header/Header.jsx'
import Products from './components/products/Products'

function App() {


  return (

    <div className="app">
      <img className='hero' src="../src/assets/poster.png" alt="sinus-skateboards-pic" />
      <Header />
      <Products />
    </div>
  )
}

export default App
