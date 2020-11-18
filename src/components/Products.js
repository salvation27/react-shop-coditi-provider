import React from 'react'
import {ProductConsumer} from './Context'
import Product from './Product'

export default function Products() {
  return (
    <ProductConsumer>
      { value=>{
const{data,closeNavCart,addToCart} = value
        return(
          <div className='products'>
            <h2>Products</h2>
            <div className="products_center product_wrap">
                {
                  data.map(item=>{
                    return(
                      <Product key={item.id} item ={item} closeNavCart={closeNavCart} addToCart={()=>addToCart(item.id)}
                       />
                    )
                  })
                }
            </div>
          </div>
        )

      }}
    </ProductConsumer>
  )
}
