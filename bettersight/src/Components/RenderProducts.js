import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import BuildProductsCards from './BuildCards';

export default function RenderProducts(products, perPage) {

    const [offSet, setOffSet] = useState(0);
    const [data, setData] = useState([]);
    
    const pageCount = Math.ceil(products.length / perPage);
    const chunkedData = products.slice(offSet, offSet + perPage);
    const recievedData = BuildProductsCards(chunkedData);

    useEffect(() => {
        setData(recievedData);
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
                  disabledClassName={"disabledBtn"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={pageCount}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={5}
                  onPageChange={onPageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
                </div>
            </div>
        </div>
    )
};
