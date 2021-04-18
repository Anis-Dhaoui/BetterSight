import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import {products} from '../sharedData/db.json';
import RenderProducts from '../Components/RenderProducts';

export default function RenderMenProducts() {

    const [offSet, setOffSet] = useState(0);
    const [data, setData] = useState([]);
    
    const perPage = 6;
    const pageCount = Math.ceil(products.length / perPage);
    const chunkedData = products.slice(offSet, offSet + perPage);
    const recievedData = RenderProducts(chunkedData);

    useEffect(() => {
        setData(recievedData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offSet]);

    const onPageClick = (event) =>{
        const selectedPage = event.selected;
        setOffSet(selectedPage * perPage);
    };

    return (
        <div className="container-fluid">{console.log(products)}
            <div className="row">
                {data}
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                <ReactPaginate
                  previousLabel={"Prev"}
                  nextLabel={"Next"}
                  disabledClassName={"disabledBtn"}
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
