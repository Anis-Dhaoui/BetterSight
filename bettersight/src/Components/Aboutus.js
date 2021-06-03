import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default function Aboutus (){
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

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
                <div class="row text-center">
                    <div class="col-sm-3 col-xs-6 first-box">
                        <h1><span class="glyphicon glyphicon-earphone"></span></h1>
                        <h3>Phone</h3>
                        <p>+080-1700-987654</p><br/>
                    </div>
                    <div class="col-sm-3 col-xs-6 second-box">
                        <h1><span class="glyphicon glyphicon-home"></span></h1>
                        <h3>Location</h3>
                        <p>1036 Voluptatum Road</p><br/>
                    </div>
                    <div class="col-sm-3 col-xs-6 third-box">
                        <h1><span class="glyphicon glyphicon-send"></span></h1>
                        <h3>E-mail</h3>
                        <p>info@yourdomain.com</p><br/>
                    </div>
                    <div class="col-sm-3 col-xs-6 fourth-box">
                        <h1><span class="glyphicon glyphicon-leaf"></span></h1>
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
      </TabContent>
    </div>
  );
}