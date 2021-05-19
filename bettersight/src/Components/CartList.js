import React from 'react'

export default function CartList(props) {     console.log(props.addedToCart);

    const removeProduct = (target) =>{
        props.remove(target)
    };

    const qtyPlus = (target) =>{
        props.plusQty(target)
    };

    const qtyMinus = (target) =>{
        props.minusQty(target)
    };

    const subTotal = props.addedToCart
        .map(item => item.total_price)
        .reduce((preVal, currentVal) =>
        {
            return preVal + currentVal;
        }, 0);
    
    const tax = subTotal * 0.06 ; //6%

    const cartList = props.addedToCart.map((item) =>{
        return(
            <article className="product" key={item.id}>
                <header>
                    <img src={item.image_1} alt={item.product_name} />

                    <button onClick={() => removeProduct(item.id)} className="btn btn-outline-danger">
                        Remove product
                    </button>
                </header>
        
                <div className="content">
        
                    <h1>{item.product_name}</h1>
                    <p>
                        {item.description}
                    </p>
                        
                </div>
        
                <footer className="content qty">
                    <span 
                        onClick={() => qtyMinus(item.id)} 
                        className={item.qty > 1 ? "qt-minus" : "qt-minus disabled-aria"}
                    >
                        -
                    </span>

                    <span className="qt">{item.qty}</span>

                    <span onClick={() => qtyPlus(item.id)} className="qt-plus">+</span>
            
                    <h2 className="full-price">
                       &#36;{item.total_price.toFixed(6).replace(/\.?0*$/,'')}
                    </h2>
            
                    <h2 className="price">
                        {item.price}
                    </h2>
                </footer>
            </article>    
        )
    });

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
                    <h2 className="subtotal">Subtotal: <span>&#36;{subTotal.toFixed(6).replace(/\.?0*$/,'')}</span></h2>
                    <h3 className="tax">Taxes (6%): <span>&#36;{tax.toFixed(2).replace(/\.?0*$/,'')}</span></h3>
                    <h3 className="shipping">Shipping: <span>&#36;10.00</span></h3>
                </div>
            
                <div className="right">
                    <h1 className="total">Total: <span>177.16</span>€</h1>
                    <button className="btn btn-outline-primary">Checkout</button>
                    <button onClick={() => props.reset()} className="btn btn-outline-danger mt-2">Reset Cart</button>
                </div>        
            </div>
        </footer>    
        </div>
    )
}
