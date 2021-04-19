import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import {products} from '../sharedData/db.json';
import { Redirect, Route, Switch } from 'react-router-dom';

export default function Main() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/home" component={() =><Home products={products} perPage={9} />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </>
    )
}
