import React from 'react'

export default function CartList(props) {

    console.log(props.addedToCart);
    const cartList = props.addedToCart.map((item) =>{
        return(
            <article className="product" key={item.id}>
                <header>
                    <img src={item.image_1} alt={item.product_name} />

                    <button className="btn btn-outline-danger">
                        Remove product
                    </button>
                </header>
        
                <div className="content">
        
                    <h1>{item.product_name}</h1>
                    <p>
                        {item.description}
                    </p>
                        
                </div>
        
                <footer className="content">
                    <span className="qt-minus">-</span>
                    <span className="qt">2</span>
                    <span className="qt-plus">+</span>
            
                    <h2 className="full-price">
                        fullPrice
                    </h2>
            
                    <h2 className="price">
                        {item.price}
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
                    <button className="btn btn-outline-primary">Checkout</button>
                </div>        
            </div>
        </footer>    
        </div>
    )
}
