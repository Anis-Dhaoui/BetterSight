import React, { useEffect, useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import * as $ from 'jquery';

export default function Aboutus (){

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  useEffect(() => {
    window.$('#feedbackCarousel').carousel({
    interval: 2000
    })
  
    $('.carousel .carousel-item').each(function(){
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

  }, [])
  
  return (
    <div className="container my-5 aboutus-content">
      <Row className="nav-tabs">
            <Col className="col-12 col-sm-4 nav-item">
                <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
                >
                About Us
                </NavLink>
            </Col>
            <Col className="col-12 col-sm-4 nav-item">
                <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
                >
                Why Choose Us
                </NavLink>
            </Col>
            <Col className="col-12 col-sm-4 nav-item">
                <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => { toggle('3'); }}
                >
                Testimonials
                </NavLink>
            </Col>
      </Row>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col className="paragraph">
                <h3>About Us</h3>
                <h4>Our Story</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h4>Our Vision</h4>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                </p>
            </Col>
            <Col xs={12}>
                <h1 className="text-center">Contact Address</h1><br />
                <div className="row text-center">
                    <div className="col-sm-3 col-xs-6 first-box">
                        <h1><span className="glyphicon glyphicon-earphone"></span></h1>
                        <h3>Phone</h3>
                        <p>+080-1700-987654</p><br/>
                    </div>
                    <div className="col-sm-3 col-xs-6 second-box">
                        <h1><span className="glyphicon glyphicon-home"></span></h1>
                        <h3>Location</h3>
                        <p>1036 Voluptatum Road</p><br/>
                    </div>
                    <div className="col-sm-3 col-xs-6 third-box">
                        <h1><span className="glyphicon glyphicon-send"></span></h1>
                        <h3>E-mail</h3>
                        <p>info@yourdomain.com</p><br/>
                    </div>
                    <div className="col-sm-3 col-xs-6 fourth-box">
                        <h1><span className="glyphicon glyphicon-leaf"></span></h1>
                        <h3>Web</h3>
                        <p>www.bettersight.com</p><br/>
                    </div>
                </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col className="paragraph">
                <h3>Why choose BeeterSight</h3>
                <h4>100% Prescription Accuracy Guaranteed and Quality Control That Is Second to None!</h4>
                <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                </p>
                <br/>
                <h4>Unbeatable Online Savings - Here's How We Do It:</h4>
                <p>
                    omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                </p>
                <h4>A Scratch Proof Multi-Hard Coating!</h4>
                <p>
                    Vivamus tempor in velit eget rhoncus. In eget dui felis. Nunc lacinia malesuada erat, id pulvinar augue vulputate sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras nec libero at orci laoreet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec finibus gravida tellus in sollicitudin.
                </p>
                <h4>Free Hard Case, Bags and Lens Cloth</h4>
                <p>
                    Vivamus maximus dapibus tellus, vel molestie sapien. Nam vehicula, augue a varius imperdiet, orci justo placerat magna, quis consequat nisl felis vitae neque. Sed malesuada eros vitae lectus sollicitudin, sit amet laoreet eros volutpat. 
                </p>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
            <section className="pt-5 pb-5">
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
                                    <div className="carousel-item active">
                                        <div className="col-md-4 mb-3">
                                            <div className="card">
                                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Special title treatment</h5>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="col-md-4 mb-3">
                                            <div className="card">
                                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Special title treatment</h5>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="col-md-4 mb-3">
                                            <div className="card">
                                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Special title treatment</h5>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="col-md-4 mb-3">
                                            <div className="card">
                                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Special title treatment</h5>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="col-md-4 mb-3">
                                            <div className="card">
                                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Special title treatment</h5>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="col-md-4 mb-3">
                                            <div className="card">
                                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Special title treatment</h5>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="col-md-4 mb-3">
                                            <div className="card">
                                                <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Special title treatment</h5>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </TabPane>
      </TabContent>
    </div>
  );
}