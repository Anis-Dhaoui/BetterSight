import React from 'react';
import {products} from '../sharedData/Products.js';

export default function RenderProducts() {

    const renderGoods = products.map((item) =>{
        return(
            <div className="content">
                <div id="productCarousel" className="carousel slide carousel-fade">
                    <ol className="carousel-indicators">
                        <li style={{backgroundColor:"red"}} data-target="#productCarousel" data-slide-to="0" className="active"></li>
                        <li style={{backgroundColor:"blue"}} data-target="#productCarousel" data-slide-to="1"></li>
                        <li style={{backgroundColor:"green"}} data-target="#productCarousel" data-slide-to="2"></li>
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
        )
    })
    return (
        <div className="container-fluid">
            {renderGoods}
        </div>
    )
};
