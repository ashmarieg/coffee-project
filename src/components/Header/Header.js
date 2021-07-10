import React, { useState }from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.scss'
import Burger from './Burger'
import logo from '../../assets/ee5609d11d064d9087b01ed124d3f721.png'

function Header() {
    

    // const [isOpen, setOpen] = useState(false);

    

  return (
    <header className="header">
      <div className="header__wrapper">
      <div className='header__logo'>
        <img  src={logo} alt="logo"/>
        
      </div>
      
      
      <ul className="header__desktop">
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Sign In</li>
        </ul>
        
      <div className="header__icon-container">
        <SearchIcon fontSize="large" className="header__search"/>
        <ShoppingBasketIcon fontSize="large"/>
        <Burger className="header__burger"/>
      </div>

      </div>
    
      
        
      
     
      
    </header>
  )
}

export default Header

