import React from 'react'
import {ProductConsumer} from './Context'
import {Link} from 'react-router-dom'
import logo from './online-shop-logo-template_59362-81.jpg'
import Cart from './Cart'

export default function Navbar() {
  return (
    <ProductConsumer>
       {(value)=>{
         const{cart,handleNav,navOpen,closeNavCart,handleCartNav} = value
         return (
          <div className="container sticky">
          <nav className="sticky">
            <div className="logo-btn">
              <Link to="/" onClick={closeNavCart} ><img src={logo} alt="logo"/><span className='shoes'>shoes</span></Link>

         <div className="cart hide" onClick={handleCartNav}><i className="fas fa-shopping-cart"></i><span>{cart.length}</span></div>

              <div className="btn" onClick={handleNav}>
                  <i className="fas fa-bars"></i>
              </div>

            </div>

            <div className="dra">
                <div className="drawers">
                    <ul className={navOpen ? "newLinks links": "links"} onClick={closeNavCart}>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/about" >About</Link></li>
                        <li><Link to="/products" >Products</Link></li>
                    </ul>

                    <Cart valueProps={value} />
                </div>

         <span className="carta" onClick={handleCartNav}>Cart<i className="fas fa-shopping-cart cart"><span>{cart.length}</span></i></span>
            </div>
          </nav>
        </div>
         )
       }}
    </ProductConsumer>
  )
}
