import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import {products} from '../sharedData/Products.js';

export default function RenderProducts() {

    const [offSet, setOffSet] = useState(0);
    const [data, setData] = useState([]);
    
    const perPage = 6;
    const pageCount = Math.ceil(products.length / perPage);
    const chunkedData = products.slice(offSet, offSet + perPage);

    const renderGoods = chunkedData.map((item) =>
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
                        <span className="fa fa-lg fa-heart-o"></span>
                    </div>
                </div>

                <div className="row title-price">
                    <div className="col-12">
                        <span>{item.title}</span>
                        <span className="float-right">{item.price}</span>
                    </div>
                </div>
            </div>

            <div className="add-cart-btn">
                <div className="col-12 d-flex justify-content-center">
                    <button className="btn btn-outline-info btn-lg">Add to cart</button>
                </div>
            </div>
        </div>
    );

    useEffect(() => {
        setData(renderGoods);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offSet]);

    const onPageClick = (event) =>{
        const selectedPage = event.selected;
        setOffSet(selectedPage * perPage);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {data}
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                <ReactPaginate
                  previousLabel={"Prev"}
                  nextLabel={"Next"}
                  previousClassName={pageCount ? "disableddBtn" : null}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={4}
                  onPageChange={onPageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
                </div>
            </div>
        </div>
    )
};
