import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ShowMenWomenProd from './MenWomenProducts';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    products: state
})


function Main(props) {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/home" component={() =><Home products={props.products} perPage={9} />} />
                <Route exact path="/men" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Male")} perPage={6} />} />
                <Route path="/men/sunglasses" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Male" && item.product_type === "sunglasses")} perPage={6} />} />
                <Route path="/men/eyeglasses" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Male" && item.product_type === "eyeglasses")} perPage={6} />} />
                <Route exact path="/women" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Female")} perPage={6} />} />
                <Route path="/women/sunglasses" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Female" && item.product_type === "sunglasses")} perPage={6} />} />
                <Route path="/women/eyeglasses" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Female" && item.product_type === "eyeglasses")} perPage={6} />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </>
    )
};

export default withRouter(connect(mapStateToProps)(Main));
