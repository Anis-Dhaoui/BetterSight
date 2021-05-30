import React, { useState } from 'react'
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Row, Label, Col } from 'reactstrap';
import StarRatings from 'react-star-ratings';

const required = (val) => val;
const minMaxLength = (minLen, maxLen) => (val) => !val || (val.length >= minLen && val.length <= maxLen);
// const isNumber = (val) => !val || (val !== "" && !isNaN(val));
const validEmail = (val) => !val || /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export default function Reviews({reviews}) {

    const [rate, setRate] = useState(0)

    const handleRating = (val)=>{
        setRate(val)
    }

    let i = 0;
    const renderReviews = reviews.map((item) =>{
        return(
            <div 
                className={i++ % 2 === 0 ? "comment mt-4 text-justify float-left" : 
                            "comment mt-4 text-justify float-left bg-transparent"
                        }
                key={item.id} 
            >
                <div className="row mb-3">
                    <div className="col-12 col-md-4 col-sm-12">
                        <img src={item.avatar} alt={item.first_name} className="rounded-circle" width="50" height="50" />
                        <h5> {item.first_name} {item.last_name} </h5>
                    </div>
                    <div className="col-12 col-md-4 col-sm-12 d-flex justify-content-center">
                        <StarRatings
                            starRatedColor="gold"
                            starDimension="30px"
                            starSpacing="0em"
                            rating={item.rating}
                            numberOfStars={5}
                        />
                    </div>
                    <div className="col-12 col-md-4 col-sm-12 d-flex justify-content-md-end justify-content-center">
                         <h6> {item.date} </h6>
                    </div>
                </div>
                <div className="row">
                    <p> {item.comment} </p>
                </div>
            </div>
        )
    });

    return (
        <div id="review">
            <div className="row">
                <div className="col-12">
                    <h1 className="ml-3">Customers Reviews</h1>
                </div>
            </div>

            <div className="row">            
                <div className="col-12 col-sm-7 col-md-8 pb-4">
                    {renderReviews}
                </div>

                <div className="col-12 col-sm-5 col-md-4 mt-4">

                    <LocalForm onSubmit={(value) => this.handleSubmit(value)} className="form-rev p-3">
                        <Row className="d-flex justify-content-center text-light px-1" style={{backgroundColor:"#007bff"}}>
                            <h2>Did love it! let us know</h2>
                        </Row>
                        <Row className="form-group">
                            <Col xs="12" className="label" htmlFor="rating">
                                Rate this product:
                            </Col>
                            <Col xs="12">
                                <StarRatings
                                rating={rate}
                                starRatedColor="gold"
                                starHoverColor="yellow"
                                starDimension="30px"
                                starSpacing="0em"
                                changeRating={handleRating}
                                numberOfStars={5}
                                name='rating'
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="name">First Name</Label>
                            {/* eslint-disable-next-line */}
                            <Control.text model='.firstName' className="form-control" name="firstName" id="firstName" placeholder="First name"
                                validators={{ required, minMaxLength: minMaxLength(3, 15)}}
                            />
                            <Errors className="text-danger" model=".firstName" show="touched"
                                messages={{
                                    required: "Required field",
                                    minMaxLength: "Invalid Name"
                                }} 
                            />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="name">Last Name</Label>
                            {/* eslint-disable-next-line */}
                            <Control.text model='.lastName' className="form-control" name="lastName" id="lastName" placeholder="Last name"
                                validators={{ required, minMaxLength: minMaxLength(3, 15)}}
                            />
                            <Errors className="text-danger" model=".lastName" show="touched"
                                messages={{
                                    required: "Required field",
                                    minMaxLength: "Invalid Name"
                                }} 
                            />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="name">Email</Label>
                            {/* eslint-disable-next-line */}
                            <Control.text model='.email' className="form-control" name="email" id="email" placeholder="Email address"
                                validators={{ required, validEmail}}
                            />
                            <Errors className="text-danger" model=".email" show="touched"
                                messages={{
                                    required: "Required field",
                                    validEmail: "Invalid email address"
                                }} 
                            />
                        </Row>
                        

                        <Row className="form-group">
                            <Label htmlFor="comment">Comment</Label>
                            {/* eslint-disable-next-line */}
                            <Control.textarea model=".comment" className="form-control" name="comment" id="comment" placeholder="Type your comment" rows={5}
                                validators={{ required, minMaxLength: minMaxLength(4, 30)}}
                            />
                            <Errors className="text-danger" model=".comment" show="touched"
                                messages={{
                                    required: "Required field",
                                    minMaxLength: "Invalid comment"
                                }} 
                            />
                        </Row>
                        
                        <Row className="form-group">
                            <button type="submit" className="btn btn-success btn-block mx-3">Submit</button>
                        </Row>
                    </LocalForm>
                </div>
            </div>
        </div>
    )
}
