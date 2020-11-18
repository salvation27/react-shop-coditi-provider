import React, { Component } from 'react'
import {ProductConsumer} from './Context'
import {Link} from 'react-router-dom'

export default class Details extends Component {
  render(props) {
    return (
      <ProductConsumer>
        {value=>{
          const{data,addToCart}= value
        //  получили переменную для подробностей карточки

          let results = data.find(item=>item.id===parseInt(this.props.match.params.id))

          return(
            <div className='det'>
              <div className="inside-container">
                <h2>{results.title}</h2>
                <div className="det-center">
                  <div className="det-img">
                    <img src={results.img} alt=""/>
                  </div>
                  <div className="det-info">
                    <h3>{results.title}</h3>
                    <p>{results.details}</p>
                    <h4>price: <span>${results.price}</span></h4>
                  </div>
                  <div className="but-options">
                      <Link to='/products'>Вернутся в каталог</Link>
                  </div>
                  
                  <button className="add-toCart" onClick={()=>addToCart(results.id)}>
                      Добавить в корзину
                </button>
                 
                </div>
              </div>
            </div>
          )
        }

        }
      </ProductConsumer>
    )
  }
}
