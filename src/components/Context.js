import React, { Component } from 'react'
import {Data} from './Data'


const ProductContext = React.createContext()


class ProductProvider extends Component {

  state ={

    navOpen:false,
    cartOpen:false,
    data:Data,
    cart:[],
    total:0,
    shipping:10,
  }

//for open close

handleNav = () => {
  this.setState({
    navOpen:!this.state.navOpen
  })
}

// если корзина открыта закрываем меню

closeNavCart = () =>{
  if(this.state.navOpen === true || this.state.cartOpen === true){
    this.setState({
      navOpen:false,
      cartOpen:false
    })
  }
}

// открывает закрывает корзину

handleCartNav = () => {
  if(this.state.navOpen === true){
    this.setState({
      navOpen:false
    })
  }

  this.setState({
    cartOpen:!this.state.cartOpen
  })
}


// добавление в корзину

addToCart = (id) => {
  const{data}=this.state

// для того что б товар не добавлялся в карзину больше 1 раза

  let check=this.state.cart.find(item=>item.id===id)

  if(!check) {
    const filterData = data.filter(item=>{
      return(
        item.id === id
      )
    })



    filterData.forEach(item=>{
     item.isInCart=true
    })



    this.setState({
      cart:[...this.state.cart,...filterData],
      cartOpen:true
    },()=>{
      this.totalItems()
    })


  }
else {
alert('уже в корзине')
}
}


// удаление из корзины

deleteItem = (id) => {
   const {cart} = this.state

   cart.forEach((item,index)=>{
     if(item.id === id){
       cart.splice(index,1)
     }
     item.isInCart=false
   })
   this.setState({
     cart:cart
   })
}


// увеличение колличества товара в корзине

increaseItem = (id) => {
 const{cart} = this.state
 cart.forEach(item=>{
   if(item.id===id ){
    item.count +=1
   }
 })

 this.setState({
   cart:cart
 },()=>{
   this.totalItems()
 })
}


decreaseItem = (id) => {
  const{cart} = this.state

  cart.forEach(item=>{
    if(item.id===id ){
   item.count===1 ?  item.count =1 : item.count -=1
    }
  })
  this.setState({
    cart:cart
  },()=>{
    this.totalItems()
  })
}

// общая цифра в корзине

totalItems =() => {

  const{cart} = this.state

  const cartTotal = cart.reduce((prev,item)=>{
    return prev+(item.price*item.count)
  },0)

  this.setState({
    total:cartTotal
  })

}

componentDidMount(){
  this.totalItems()

  const dataCart =JSON.parse(localStorage.getItem('dataCart'))

  if(dataCart !==null){
      this.setState({
        cart:dataCart
      })
  }

  const totalCart =JSON.parse(localStorage.getItem('totalCart'))

  if(totalCart !==null){
    this.setState({
      total:totalCart
    })
}


}

componentDidUpdate(){
  localStorage.setItem('dataCart',JSON.stringify(this.state.cart))
  localStorage.setItem('totalCart',JSON.stringify(this.state.total))

}

  render() {
    return (
      <ProductContext.Provider value ={
        {
          ...this.state,
          handleNav:this.handleNav,
          closeNavCart:this.closeNavCart,
          handleCartNav:this.handleCartNav,
          addToCart:this.addToCart,
          deleteItem:this.deleteItem,
          increaseItem:this.increaseItem,
          decreaseItem:this.decreaseItem,
          totalItems:this.totalItems
        }
      }>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider,ProductConsumer}