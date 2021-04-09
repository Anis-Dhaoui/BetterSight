import React from 'react';
import {products} from '../sharedData/Products.js';

export default function RenderProducts() {

    const renderGoods = products.map((item) =>{
        return(
            <div className="col-12 col-sm-6 col-lg-4 product-container" key={item.id}>
                <div className="content">
                    <div id={'product-'+item.id} className="carousel slide carousel-fade">
                        <ol className="carousel-indicators">
                            <li style={{backgroundColor:"red"}} data-target={'#product-'+item.id} data-slide-to="0" className="active"></li>
                            <li style={{backgroundColor:"blue"}} data-target={'#product-'+item.id} data-slide-to="1"></li>
                            <li style={{backgroundColor:"green"}} data-target={'#product-'+item.id} data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={item.defaultImage} alt={item.title}/>
                            </div>
                            <div className="carousel-item">
                                <img src={item.secondImage} alt={item.title}/>
                            </div>
                            <div className="carousel-item">
                                <img src={item.thirdImage} alt={item.title}/>
                            </div>
                        </div>
                    </div> 
                </div>

                <div className="title-price-like_content mb-5">
                    <div className="row">
                        <div className="col-12 wishlist-button">
                            <span className="fa fa-lg fa-heart"></span>
                        </div>
                    </div>

                    <div className="row title-price">
                        <div className="col-6">
                            <span>{item.title}</span>
                        </div>
                        <div className="col-6">
                            <span>{item.price}</span>
                        </div>
                    </div>
                </div>

                <div className="add-cart-btn">
                    <div className="col-12 text-center my-1">
                        <button className="btn btn-outline-info btn-lg text-center">Add to cart</button>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="container-fluid">
            <div className="row">
                {renderGoods}
            </div>
        </div>
    )
};
