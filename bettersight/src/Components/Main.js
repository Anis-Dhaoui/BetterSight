import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ShowMenWomenProd from './MenWomenProducts';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CartList from './CartList';
import { addToCart } from '../Redux/Actions';

const mapStateToProps = (state) =>({
    products: state.products.products
});

const mapDispatchToProps = dispatch =>({
    addToCart: (target) =>{dispatch(addToCart(target))}
})


function Main(props) {    
    return (
        <>{console.log(props.products)}
            <Header />
            <Switch>
                <Route path="/home" component={() =><Home products={props.products} perPage={9} addToCart={props.addToCart} />} />
                <Route exact path="/men" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Male")} perPage={6} addToCart={props.addToCart} />} />
                <Route path="/men/sunglasses" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Male" && item.product_type === "sunglasses")} perPage={6} addToCart={props.addToCart} />} />
                <Route path="/men/eyeglasses" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Male" && item.product_type === "eyeglasses")} perPage={6} />} />
                <Route exact path="/women" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Female")} perPage={6} />} />
                <Route path="/women/sunglasses" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Female" && item.product_type === "sunglasses")} perPage={6} addToCart={props.addToCart} />} />
                <Route path="/women/eyeglasses" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Female" && item.product_type === "eyeglasses")} perPage={6} addToCart={props.addToCart} />} />
                <Route path="/incart" component={() => <CartList addedToCart={props.products.filter((item) => item.incart === true)} />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </>
    )
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
