import React, { useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ShowMenWomenProd from './MenWomenProducts';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CartList from './CartList';
import { addToCart, removeFromCart, addQuantity, subtractQuantity, emptyCart, postNewReview, fetchTestimonials, postTestimonial } from '../Redux/Actions';
import ProductDetail from './ProductDetail';
import Aboutus from './Aboutus';
import { actions } from 'react-redux-form';

const mapStateToProps = (state) =>({
    products: state.products.products,
    reviews: state.reviews,
    testimonials: state.testimonials
});

const mapDispatchToProps = dispatch =>({
    addToCart: (target) => {dispatch(addToCart(target))},
    removeFromCart: (target) => {dispatch(removeFromCart(target))},
    addQty: (target) => {dispatch(addQuantity(target))},
    subQty: (target) => {dispatch(subtractQuantity(target))},
    resetCart: (target) => {dispatch(emptyCart(target))},
    postNewReview: (prodId, firstName, lastName, email, comment, date, rating) => {dispatch(postNewReview(prodId, firstName, lastName, email, comment, date, rating ))},
    fetchTestimonials: () =>{dispatch(fetchTestimonials())},
    postTestimonial: (value) =>{dispatch(postTestimonial(value))},
    reseTestimonialForm: () => {dispatch(actions.reset("testimonial"))}
});

function Main(props) {

    useEffect(() => {
        props.fetchTestimonials();
    /* eslint-disable-next-line*/
    }, []);

    const productInfo = ({match}) =>{
        return(
            <ProductDetail product={
                    props.products.filter((item) => item.id === parseInt(match.params.prodId, 10))[0]
                }
                addToCart={props.addToCart}
                reviews={props.reviews.filter((item) => item.product_id === parseInt(match.params.prodId, 10))}
                postReview={props.postNewReview}
            />
        )
    };  

    return (
        <>
            <Header cart={props.products.filter((item) => item.incart)}/>
            <Switch>
                <Route path="/home" component={() =><Home products={props.products} perPage={9} addToCart={props.addToCart} />} />
                <Route exact path="/men" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Male")} perPage={6} addToCart={props.addToCart} />} />
                <Route path="/men/sunglasses" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Male" && item.product_type === "sunglasses")} perPage={6} addToCart={props.addToCart} />} />
                <Route path="/men/eyeglasses" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Male" && item.product_type === "eyeglasses")} perPage={6} addToCart={props.addToCart} />} />
                <Route exact path="/women" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Female")} perPage={6} addToCart={props.addToCart} />} />
                <Route path="/women/sunglasses" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Female" && item.product_type === "sunglasses")} perPage={6} addToCart={props.addToCart} />} />
                <Route path="/women/eyeglasses" component={() => <ShowMenWomenProd products={props.products.filter((item) => item.gender === "Female" && item.product_type === "eyeglasses")} perPage={6} addToCart={props.addToCart} />} />
                <Route path="/incart" component={() => 
                                        <CartList 
                                            addedToCart={props.products.filter((item) => item.incart === true)}
                                            remove={props.removeFromCart}
                                            plusQty={props.addQty}
                                            minusQty={props.subQty}
                                            reset={props.resetCart}
                                        />}
                />
                <Route path="/detail/:prodId" component={productInfo} />
                <Route path="/aboutus" component={ () => <Aboutus testimonials={props.testimonials} postTestimonial={props.postTestimonial} reseTestimonialForm={props.reseTestimonialForm} /> } />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </>
    )
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
