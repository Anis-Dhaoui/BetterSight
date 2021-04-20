import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ShowProducts from './ShowProducts';
import {products} from '../sharedData/db.json';
import { Redirect, Route, Switch } from 'react-router-dom';

export default function Main() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/home" component={() =><Home products={products} perPage={9} />} />
                <Route exact path="/men" component={() => <ShowProducts products={products.filter((item) => item.gender === "Male")} perPage={6} />} />
                <Route path="/men/sunglasses" component={() => <ShowProducts products={products.filter((item) => item.gender === "Male" && item.product_type === "sunglasses")} perPage={6} />} />
                <Route path="/men/eyeglasses" component={() => <ShowProducts products={products.filter((item) => item.gender === "Male" && item.product_type === "eyeglasses")} perPage={6} />} />
                <Route exact path="/women" component={() => <ShowProducts products={products.filter((item) => item.gender === "Female")} perPage={6} />} />
                <Route path="/women/sunglasses" component={() => <ShowProducts products={products.filter((item) => item.gender === "Female" && item.product_type === "sunglasses")} perPage={6} />} />
                <Route path="/women/eyeglasses" component={() => <ShowProducts products={products.filter((item) => item.gender === "Female" && item.product_type === "eyeglasses")} perPage={6} />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </>
    )
}
