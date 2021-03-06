// import React, { useEffect, useRef, useState } from 'react';
// import { TabContent, TabPane, NavLink, Row, Col } from 'reactstrap';
// import classnames from 'classnames';
// import * as $ from 'jquery';
// // import {url} from '../sharedData/Url';
// import { Form, Control } from 'react-redux-form';

// export default function Aboutus (props){
//   let fileInput = useRef(null);

//   const [activeTab, setActiveTab] = useState('3');
//   const [imgPrev, setImgPrev] = useState({file: "", imgUrl: ""})

//   const toggle = tab => {
//     if(activeTab !== tab) setActiveTab(tab);
//   }

// // Some jquery to set time between slide show and to show 3 cards together while sliding
//     useEffect(() => {
//         window.$('#feedbackCarousel').carousel({
//         interval: 5000
//         })
    
//         $('.carousel .carousel-item').each(function(){
//             var minPerSlide = 3;
//             var next = $(this).next();
//             if (!next.length) {
//             next = $(this).siblings(':first');
//             }
//             next.children(':first-child').clone().appendTo($(this));
            
//             for (var i=0;i<minPerSlide;i++) {
//                 next=next.next();
//                 if (!next.length) {
//                     next = $(this).siblings(':first');
//                 }
                
//                 next.children(':first-child').clone().appendTo($(this));
//             }
//         });
//     }, []);

// //Render carousel Items that contains testimonials
//     const renderCarouselItems = props.testimonials.map((item) =>{
//         return(
//             <div className={item.id === 0 ? "carousel-item active" : "carousel-item"} key={item.id}>
//             <div className="col-md-4 mb-3">
//                 <div className="card" style={{height:"450px", minHeight:"450px"}}>
//                     <img className="img-fluid" alt={item.photo} src={item.photo} />
//                     <div className="card-body">
//                         <h5 className="card-title text-primary">{item.first_name + " " + item.last_name}</h5>
//                         <p className="card-text">{item.feedback}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         )
//     });

// //Handling submit form button
//     const handleSubmit = (value) =>{
//         props.postTestimonial(value);
//         props.reseTestimonialForm();
//         alert("Thank you for your testimonial,\n it's highly appreciated");
//         console.log(value.photo[0]);
//     }

// //Handling image preview
//     const handleImgPreview = (event) =>{
//         console.log(event)
//         event.preventDefault();
//         let reader = new FileReader();
//         let file = event.target.files[0];
    
//         reader.onloadend = () => {
//             setImgPrev({...imgPrev, file: file, imgUrl: reader.result})
//         }
    
//         reader.readAsDataURL(file)
//     };

//     return (
//         <div className="container my-5 aboutus-content">
//         <Row className="nav-tabs">
//                 <Col className="col-12 col-sm-4 nav-item">
//                     <NavLink
//                     className={classnames({ active: activeTab === '1' })}
//                     onClick={() => { toggle('1'); }}
//                     >
//                     About Us
//                     </NavLink>
//                 </Col>
//                 <Col className="col-12 col-sm-4 nav-item">
//                     <NavLink
//                     className={classnames({ active: activeTab === '2' })}
//                     onClick={() => { toggle('2'); }}
//                     >
//                     Why Choose Us
//                     </NavLink>
//                 </Col>
//                 <Col className="col-12 col-sm-4 nav-item">
//                     <NavLink
//                     className={classnames({ active: activeTab === '3' })}
//                     onClick={() => { toggle('3'); }}
//                     >
//                     Testimonials
//                     </NavLink>
//                 </Col>
//         </Row>

//         <TabContent activeTab={activeTab}>
//             <TabPane tabId="1">
//             <Row>
//                 <Col className="paragraph">
//                     <h3>About Us</h3>
//                     <h4>Our Story</h4>
//                     <p>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                     </p>
//                     <h4>Our Vision</h4>
//                     <p>
//                         At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
//                     </p>
//                 </Col>
//                 <Col xs={12}>
//                     <h1 className="text-center">Contact Address</h1><br />
//                     <div className="row text-center">
//                         <div className="col-sm-3 col-xs-6 first-box">
//                             <h1><span className="glyphicon glyphicon-earphone"></span></h1>
//                             <h3>Phone</h3>
//                             <p>+080-1700-987654</p><br/>
//                         </div>
//                         <div className="col-sm-3 col-xs-6 second-box">
//                             <h1><span className="glyphicon glyphicon-home"></span></h1>
//                             <h3>Location</h3>
//                             <p>1036 Voluptatum Road</p><br/>
//                         </div>
//                         <div className="col-sm-3 col-xs-6 third-box">
//                             <h1><span className="glyphicon glyphicon-send"></span></h1>
//                             <h3>E-mail</h3>
//                             <p>info@yourdomain.com</p><br/>
//                         </div>
//                         <div className="col-sm-3 col-xs-6 fourth-box">
//                             <h1><span className="glyphicon glyphicon-leaf"></span></h1>
//                             <h3>Web</h3>
//                             <p>www.bettersight.com</p><br/>
//                         </div>
//                     </div>
//                 </Col>
//             </Row>
//             </TabPane>
//             <TabPane tabId="2">
//             <Row>
//                 <Col className="paragraph">
//                     <h3>Why choose BeeterSight</h3>
//                     <h4>100% Prescription Accuracy Guaranteed and Quality Control That Is Second to None!</h4>
//                     <p>
//                         Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
//                     </p>
//                     <br/>
//                     <h4>Unbeatable Online Savings - Here's How We Do It:</h4>
//                     <p>
//                         omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
//                     </p>
//                     <h4>A Scratch Proof Multi-Hard Coating!</h4>
//                     <p>
//                         Vivamus tempor in velit eget rhoncus. In eget dui felis. Nunc lacinia malesuada erat, id pulvinar augue vulputate sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras nec libero at orci laoreet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec finibus gravida tellus in sollicitudin.
//                     </p>
//                     <h4>Free Hard Case, Bags and Lens Cloth</h4>
//                     <p>
//                         Vivamus maximus dapibus tellus, vel molestie sapien. Nam vehicula, augue a varius imperdiet, orci justo placerat magna, quis consequat nisl felis vitae neque. Sed malesuada eros vitae lectus sollicitudin, sit amet laoreet eros volutpat. 
//                     </p>
//                 </Col>
//             </Row>
//             </TabPane>
//             <TabPane tabId="3">
//                 <section className="pt-5 pb-5">
//                     <div id="testimonials" className="container">
//                         <div className="row">
//                             <div className="col-6">
//                                 <h3 className="mb-3">Testimonials</h3>
//                             </div>
//                             <div className="col-6 text-right">
//                                 <a className="btn btn-primary mb-3 mr-1" href="#feedbackCarousel" role="button" data-slide="prev">
//                                     <i className="fa fa-arrow-left"></i>
//                                 </a>
//                                 <a className="btn btn-primary mb-3 " href="#feedbackCarousel" role="button" data-slide="next">
//                                     <i className="fa fa-arrow-right"></i>
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-12">
//                                 <div id="feedbackCarousel" className="carousel slide w-100" data-ride="carousel">

//                                     <div className="carousel-inner w-100">
//                                         {renderCarouselItems}
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section id="testimonial-form">
//                 <div className="container">

//                     <h2 className="title pl-3 pt-0 pb-3 text-center">Contact us</h2>
//                     <Form model="testimonial" onSubmit={(value) => handleSubmit(value)}>
//                         <div className="row">
//                             {/* eslint-disable*/}
//                             <div className="col-12 order-12 order-md-0 col-md-6">
//                                 <div className="form-group col-md-12 mb-2">
//                                     <Control.text model=".first_name" name="first_name" id="first_name" className="form-control" placeholder="First Name" required />
//                                 </div>
//                                 <div className="form-group col-md-12 mb-2">
//                                     <Control.text model=".last_name" name="last_name" id="last_name" className="form-control" placeholder="Last Name" required />
//                                 </div>
//                                 <div className="form-group col-md-12 mb-3">
//                                     <Control.textarea model=".feedback" name="feedback" id="feedback" rows="6" className="form-control" placeholder="Testimonial" required />
//                                 </div>
//                                 {/* eslint-disable*/}
//                                 <div className="form-group col-md-12 mb-4">
//                                     <button type="submit" className="btn btn-dark btn-block">Send</button>
//                                 </div>
//                                 <div className="form-group col-md-12">
//                                     <button type="reset" className="btn btn-danger btn-block">Reset</button>
//                                 </div>
//                             </div>
//                             <div id="preview-upload" className="form-group order-0 order-md-12 col-12 col-md-6 mb-3">
//                                 <span onClick={() => {console.log(fileInput); fileInput.click()}} className="upload-icon fa"></span>
//                                 <Control.file getRef={(input) => fileInput = input} onChange={(e) => handleImgPreview(e)} model=".photo" name="photo" id="photo" required /> 
//                                 {imgPrev.imgUrl !== "" ?
//                                     <img className="img-prev" src={imgPrev.imgUrl} />
//                                     :
//                                     <img className="img-prev" src="https://cdn-bfonk.nitrocdn.com/oeSmaXauHxzamSEdExHbYbKSxAcRYCju/assets/static/source/wp-content/uploads/2019/04/c2b68bf6ba939d277f785f3a3c183e4b.placeholder-300x200.png" />
//                                 }
//                             </div>
//                         </div>
//                     </Form>   

//                 </div>
//                 </section>
//             </TabPane>
//         </TabContent>
//         </div>
//   );
// }
























import React, { useEffect } from 'react';
import * as $ from 'jquery';

export default function Aboutus (props){

    const testimonials = [
          {
            "id": 0,
            "first_name": "Ruggiero",
            "last_name": "Francesco",
            "photo": "http://dummyimage.com/1080x728.png/5fa2dd/ffffff",
            "feedback": "faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo"
          },
          {
            "id": 1,
            "first_name": "Lavinia",
            "last_name": "Golledge",
            "photo": "http://dummyimage.com/1080x728.png/5fa2dd/ffffff",
            "feedback": "porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet"
          },
          {
            "id": 2,
            "first_name": "Adora",
            "last_name": "Gater",
            "photo": "http://dummyimage.com/1080x728.png/5fa2dd/ffffff",
            "feedback": "risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis"
          },
          {
            "id": 3,
            "first_name": "Robert",
            "last_name": "Ruffey",
            "photo": "http://dummyimage.com/1080x728.png/dddddd/000000",
            "feedback": "neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis"
          },
          {
            "id": 4,
            "first_name": "Tomkin",
            "last_name": "Mathevon",
            "photo": "http://dummyimage.com/1080x728.png/dddddd/000000",
            "feedback": "quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus"
          }
        ]
// Some jquery to set time between slide show and to show 3 cards together while sliding
    useEffect(() => {
        window.$('#feedbackCarousel.carousel').carousel({
        interval: 5000
        })
    
        $('#feedbackCarousel.carousel .carousel-item').each(function(){
            var minPerSlide = 3;
            var next = $(this).next();
            if (!next.length) {
            next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
            
            for (var i=0;i<minPerSlide;i++) {
                next=next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                
                next.children(':first-child').clone().appendTo($(this));
            }
        });
    }, []);

//Render carousel Items that contains testimonials
    const renderCarouselItems = testimonials.map((item) =>{
        return(
            <div className={item.id === 0 ? "carousel-item active" : "carousel-item"} key={item.id}>
            <div className="col-md-4 mb-3">
                <div className="card" style={{height:"450px", minHeight:"450px"}}>
                    <img className="img-fluid" alt={item.photo} src={item.photo} />
                    <div className="card-body">
                        <h5 className="card-title text-primary">{item.first_name + " " + item.last_name}</h5>
                        <p className="card-text">{item.feedback}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    });

    return (
        <div id="testimonials" className="container">
            <div className="row">
                <div className="col-6">
                    <h3 className="mb-3">Testimonials</h3>
                </div>
                <div className="col-6 text-right">
                    <a className="btn btn-primary mb-3 mr-1" href="#feedbackCarousel" role="button" data-slide="prev">
                        <i className="fa fa-arrow-left"></i>
                    </a>
                    <a className="btn btn-primary mb-3 " href="#feedbackCarousel" role="button" data-slide="next">
                        <i className="fa fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div id="feedbackCarousel" className="carousel slide w-100" data-ride="carousel">

                        <div className="carousel-inner w-100">
                            {renderCarouselItems}
                        </div>

                    </div>
                </div>
            </div>
        </div>
  );
}