import React from 'react';
import Reviews from './Reviews';

export default function ProductDetail(props) {
    return (            
        <div className="container">
            <div className="row">
                <div className="card ">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                
                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1"><img src={props.product.image_1} alt={props.product.product_name} /></div>
                                    <div className="tab-pane" id="pic-2"><img src={props.product.image_2} alt={props.product.product_name} /></div>
                                    <div className="tab-pane" id="pic-3"><img src={props.product.image_3} alt={props.product.product_name} /></div>
                                </div>
                                <ul className="preview-thumbnail nav nav-tabs">
                                    {/* eslint-disable */}
                                    <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={props.product.image_1} alt={props.product.product_name} /></a></li>
                                    <li><a data-target="#pic-2" data-toggle="tab"><img src={props.product.image_2} alt={props.product.product_name} /></a></li>
                                    <li><a data-target="#pic-3" data-toggle="tab"><img src={props.product.image_3} alt={props.product.product_name} /></a></li>
                                    {/* eslint-disable */}
                                </ul>
                                
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{props.product.product_name}</h3>
                                <div className="rating">
                                    <div className="stars">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <span className="review-no">41 reviews</span>
                                </div>
                                <p className="product-description">{props.product.description}</p>
                                <h4 className="price">current price: <span>{props.product.price}</span></h4>

                                <h5 className="colors">colors:
                                    <span style={{backgroundColor:props.product.color_1}} className="color checked-color" data-toggle="tooltip" title="Not In store"></span>
                                    <span style={{backgroundColor:props.product.color_2}} className="color"></span>
                                    <span style={{backgroundColor:props.product.color_3}} className="color"></span>
                                </h5>
                                <div className="action">
                                    {
                                        props.product.incart ?
                                        <button className="add-to-cart btn, btn-default mr-3" type="button">in Cart</button>
                                        :
                                        <button onClick={() => props.addToCart(props.product.id)} className="add-to-cart btn btn-default mr-3" type="button">add to cart</button>
                                    }        
                                    <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Reviews reviews={props.reviews} productId={props.product.id} postNewRev={props.postReview}/>
        </div>
    )
}
