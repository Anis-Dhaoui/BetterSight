import React from 'react'

export default function CartList(props) {

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
    const shipment = subTotal === 0 ? 0 : 10;
    const total = subTotal + tax + shipment;

    const cartList = props.addedToCart.map((item) =>{
        return(
            <article className="row product pt-3" key={item.id}>
                <header className="col-12 col-md-3">
                    <img src={item.image_1} alt={item.product_name} />

                    <button onClick={() => removeProduct(item.id)} className="btn btn-outline-danger d-none d-sm-block">
                        Remove product
                    </button>
                    <span onClick={() => removeProduct(item.id)} className="btnx fa fa-trash del-btn d-sm-none">
                    </span>
                </header>
        
                <div className="col-12 col-md-9 content">
                    <div className="row">
                        <div style={{height:"131px"}} className="title-info">
                            <h1 className="col-12 pl-4"> {item.product_name} </h1>
                            <p className="col-12 pl-4"> {item.description} </p>
                        </div>
                        <footer className="col-12 content">
                            <div className="row">
                                <div className="col-12 col-md-8 order-12 order-sm-0 d-flex justify-content-center justify-content-md-start">
                                    <span 
                                        onClick={() => qtyMinus(item.id)} 
                                        className={item.qty > 1 ? "qt-minus" : "qt-minus disabled-aria"}
                                    >
                                        -
                                    </span>

                                    <span className="qt">{item.qty}</span>

                                    <span onClick={() => qtyPlus(item.id)} className="qt-plus">+</span>
                                </div>
                        
                                <h2 className=" col-12 col-md-2 order-0 order-sm-0 text-center text-warning price ml-md-n4">
                                    {item.price}
                                </h2>
                                <h2 className="col-12 col-md-2 text-center full-price">
                                    &#36;{item.total_price.toFixed(6).replace(/\.?0*$/,'')}
                                </h2>
                            </div>
                        </footer>
                    </div>                       
                </div>
            </article>    
        )
    });

    return (
        <div id="cart-list" className="container">
            <div id="prod-list" className="row">
                {props.addedToCart.length !== 0 ? cartList : <h1 className="text-capitalize text-center text-info mt-5">your shopping cart is empty</h1>}
            </div>
            <footer id="site-footer" className="row mb-2 mb-md-auto">
                <div className="col-12 col-md-8">
                    <h2 className="subtotal">Subtotal: <span>&#36;{subTotal.toFixed(2).replace(/\.?0*$/,'')}</span></h2>
                    <h3 className="tax">Taxes (6%): <span>&#36;{tax.toFixed(2).replace(/\.?0*$/,'')}</span></h3>
                    <h3 className="shipping">Shipping: <span>&#36;10.00</span></h3>
                </div>
            
                <div className="col-12 col-md-4">
                    <h1 className="total">Total: <span>&#36;{total.toFixed(2).replace(/\.?0*$/,'')}</span></h1>
                    <button className="btn btn-outline-primary">Checkout</button>
                    <button onClick={() => props.reset()} className="btn btn-outline-danger mt-2">Reset Cart</button>
                </div>        
            </footer>    
        </div>
    )
}
