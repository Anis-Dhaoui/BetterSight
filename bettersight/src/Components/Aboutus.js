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
                        <p>+880-1700-987654</p><br/>
                    </div>
                    <div class="col-sm-3 col-xs-6 second-box">
                        <h1><span class="glyphicon glyphicon-home"></span></h1>
                        <h3>Location</h3>
                        <p>1036 Gulshan Road</p><br/>
                    </div>
                    <div class="col-sm-3 col-xs-6 third-box">
                        <h1><span class="glyphicon glyphicon-send"></span></h1>
                        <h3>E-mail</h3>
                        <p>info@yourdomain.com</p><br/>
                    </div>
                    <div class="col-sm-3 col-xs-6 fourth-box">
                        <h1><span class="glyphicon glyphicon-leaf"></span></h1>
                        <h3>Web</h3>
                        <p>www.yourdomain.com</p><br/>
                    </div>
                </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}