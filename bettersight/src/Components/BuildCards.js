import React from 'react'
import { Link } from 'react-router-dom';

export default function BuildProductsCards(props, addToCart) {

    const handleAddToCart = (target) =>{
       console.log("Added To Cart");
       addToCart(target);
    };

    return(
        props.map((item) =>
            <div className="product-container col-12 col-sm-6 col-lg-4" key={item.id}>
                <div className="product-imgs-content">
                    <div id={'product-'+item.id} className="carousel slide carousel-fade">
                        <ol className="carousel-indicators">
                            <li style={{backgroundColor:item.color_1}} data-target={'#product-'+item.id} data-slide-to="0" className="active"></li>
                            <li style={{backgroundColor:item.color_2}} data-target={'#product-'+item.id} data-slide-to="1"></li>
                            <li style={{backgroundColor:item.color_3}} data-target={'#product-'+item.id} data-slide-to="2"></li>
                        </ol>
                        <Link to={`detail/${item.id}`} >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={item.image_1} alt={item.title}/>
                                </div>
                                <div className="carousel-item">
                                    <img src={item.image_2} alt={item.title}/>
                                </div>
                                <div className="carousel-item">
                                    <img src={item.image_3} alt={item.title}/>
                                </div>
                            </div>
                        </Link>
                    </div> 
                </div>

                <div className="title-price-like_content mb-5">
                    <div className="row">
                        <div className="col-12 wishlist-button">
                            <span className="fa fa-lg fa-heart-o"></span>
                        </div>
                    </div>

                    <div className="row title-price">
                        <div className="col-12">
                            <span>{item.product_name}</span>
                            <span className="float-right">{item.price}</span>
                        </div>
                    </div>
                </div>

                <div className="add-cart-btn">
                    <div className="col-12 d-flex justify-content-center">
                        {item.incart ? 
                            <button className="btn btn-info added" disabled>in Cart</button> 
                            : 
                            <button onClick={() => handleAddToCart(item.id)} className="btn btn-outline-info btn-lg">Add to cart</button>
                        }
                    </div>
                </div>
            </div>
        )
    );
}
