import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from './Context'

export default class Product extends Component {
  render(props) {
    const {id,img,title,price,isInCart} = this.props.item
    const {closeNavCart,addToCart} = this.props
    return (
      // <div>
      //   {this.props.item.title}
      // </div>
      <ProductConsumer>
        { value => {
            return(
              <div className='product'>
                  <Link to={`/products/${id}`}
                  onClick={closeNavCart}
                  >
                     <div className="img-div">
                       <img src={img} alt=""/>
                     </div>
                  </Link>
                  <div className="details">
                    <h3>{title}</h3>
            <p>${price}</p>
                  </div>
                  <div className="cartBtn">
                    <button className={isInCart?'disabled':''} onClick={addToCart}>
                       <i className="fas fa-shopping-cart"></i>
                        {isInCart?'Уже в корзине':'Добавить в корзину'}
                    </button>
                  </div>
              </div>
            )
        }}

      </ProductConsumer>
    )
  }
}

