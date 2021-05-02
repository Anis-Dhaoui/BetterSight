import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ShowMenWomenProd from './MenWomenProducts';
import {products} from '../sharedData/db.json';
import { Redirect, Route, Switch } from 'react-router-dom';

export default function Main() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/home" component={() =><Home products={products} perPage={9} />} />
                <Route exact path="/men" component={() => <ShowMenWomenProd products={products.filter((item) => item.gender === "Male")} perPage={6} />} />
                <Route path="/men/sunglasses" component={() => <ShowMenWomenProd products={products.filter((item) => item.gender === "Male" && item.product_type === "sunglasses")} perPage={6} />} />
                <Route path="/men/eyeglasses" component={() => <ShowMenWomenProd products={products.filter((item) => item.gender === "Male" && item.product_type === "eyeglasses")} perPage={6} />} />
                <Route exact path="/women" component={() => <ShowMenWomenProd products={products.filter((item) => item.gender === "Female")} perPage={6} />} />
                <Route path="/women/sunglasses" component={() => <ShowMenWomenProd products={products.filter((item) => item.gender === "Female" && item.product_type === "sunglasses")} perPage={6} />} />
                <Route path="/women/eyeglasses" component={() => <ShowMenWomenProd products={products.filter((item) => item.gender === "Female" && item.product_type === "eyeglasses")} perPage={6} />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </>
    )
}
