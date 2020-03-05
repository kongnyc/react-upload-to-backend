
import React, { Component } from 'react';
import ProductDisplay from './productDisplay';

class ProductList extends Component {
  state = { products: [
        {
          name: "Ultra Boost",
          manufacturer: "Adidas",
          price: 160,
          quantity: 5
        },
        {
          name: "Air Force One Low",
          manufacturer: "Nike",
          price: 100,
          quantity: 6

        },
        {
          name: "Classic Leather",
          manufacturer: "Reebok",
          price: 120,
          quantity: 3
        },
        {
          name: "Sk8-Hi",
          manufacturer: "Vans",
          price: 60,
          quantity: 10
        }
      ],
    cart: {}};

 
  handleAddToCart = (prodName) => {
    //   let item = this.state.products.find(product=>{
    //       return product.name===prodName && product.quantity>0
    //   });
    // //   debugger
    //   if(item){
    //       this.setState((prevState)=>{      
    //     return {
    //         cart: prevState.cart[item.name]={name: item.name,
    //             manufacturer: item.manufacturer,
    //             price: item.price}
    //         }
    //     })
    //  }
    

      let newProdList = this.state.products.map(product => {
        if(product.name === prodName && product.quantity > 0) {
        
        this.setState((prevState)=>{
            return{
                cart:prevState.cart[product.name]={
                    name: product.name,
                    quantity: 1,
                    manufacturer: product.manufacturer,
                    price: product.price
                }
            }
        })
        // let cartItem=0;
        return {
          name: product.name,
          quantity: product.quantity - 1,
          manufacturer: product.manufacturer,
          price: product.price,
        }
      } else {
        return product
      }
    })
    this.setState({products: newProdList});
  }

  render() { 
    // console.log(this.state.cart)
    let prods = this.state.products.map((product, i) => {
      return <ProductDisplay key={product.name} 
              name={product.name}
              price={product.price}
              manufacturer={product.manufacturer}
              quantity={product.quantity}
              handleAddToCart={this.handleAddToCart} />
    })

    return ( 
      <div>
        {prods}
      </div>
     );
  }
}
 
export default ProductList;
// import React from "react";
// import Product from "./product"


// class ProductList extends React.Component{
//     state={
//         productList:Product
//     };

//     addToCart =(e)=>{
//         console.log("add to my shopping cart")
//     }


//     render(){
//         // let prods=t
//         //     let display= this.state.productList.map((product,i)=>{
//         //         return <ProductDisplay key={product.name}
//         //     })

//         return(
//             <>
//                 { this.state.productList.map((el) => 
//                     <div key={el.name} className={"productDiv"}>
//                     Product Name: {el.name}<br></br> Manufacturer: {el.manufacturer}<br></br>Price: {el.price}<br></br>Quantity: {el.quantity}
//                     <br></br>
//                     <button onClick={this.addToCart}>Add to Cart</button>
//                     <br></br>
//                     <br></br>
//                     </div>
//                     ) 
//                     }
//             </>
//         )
//     }
// }




// export default ProductList;
