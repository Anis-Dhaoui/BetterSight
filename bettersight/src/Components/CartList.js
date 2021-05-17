import React from 'react'

export default function CartList(props) {

    console.log(props.addedToCart);
    const cartList = props.addedToCart.map((item) =>{
        return(
            <article className="product" key={item.id}>
                <header>
                    <a className="remove">
                        <img src="http://www.astudio.si/preview/blockedwp/wp-content/uploads/2012/08/1.jpg" alt="" />
            
                        <h3>Remove product</h3>
                    </a>
                </header>
        
                <div className="content">
        
                    <h1>Lorem ipsum</h1>
            
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, numquam quis perspiciatis ea ad omnis provident laborum dolore in atque.
            
                    <div title="You have selected this product to be shipped in the color yellow." style={{top: "0"}} className="color yellow"></div>
                </div>
        
                <footer className="content">
                    <span className="qt-minus">-</span>
                    <span className="qt">2</span>
                    <span className="qt-plus">+</span>
            
                    <h2 className="full-price">
                        29.98€
                    </h2>
            
                    <h2 className="price">
                        14.99€
                    </h2>
                </footer>
            </article>    
        )
    })
    return (
        <div id="cart-list">
            <div  className="container">
            <section id="cart"> 
                {props.addedToCart.length !== 0 ? cartList : <h1 className="text-capitalize text-center text-info">your shopping cart is empty</h1>}
            </section>
        </div>
        
        <footer id="site-footer">
            <div className="container clearfix">
                <div className="left">
                    <h2 className="subtotal">Subtotal: <span>163.96</span>€</h2>
                    <h3 className="tax">Taxes (5%): <span>8.2</span>€</h3>
                    <h3 className="shipping">Shipping: <span>5.00</span>€</h3>
                </div>
            
                <div className="right">
                    <h1 className="total">Total: <span>177.16</span>€</h1>
                    <a className="btn">Checkout</a>
                </div>        
            </div>
        </footer>    
        </div>
    )
}
