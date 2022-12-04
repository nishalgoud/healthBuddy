import React from "react";
import { Container, Tab, Row, ListGroup, Col } from "react-bootstrap";

export function Careers() {
  return (
    <Container>
      <Row >
        <h1>Open opportunities</h1>
      </Row>
      <Row>
        <p>See if there's a position for you - we’re hiring! </p>
      </Row>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup as="ol" numbered>
              <ListGroup.Item action href="#link1">
                Medical Assistant
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Licensed Practical Nurse
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
              Family Nurse Practitioner
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
              Behavioral Health Counselor (Virtual)
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
              Float Medical Assistant
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
              Physician Assistant
              </ListGroup.Item>
              <ListGroup.Item action href="#link7">
              Senior Director, Member Engagement
              </ListGroup.Item>
              <ListGroup.Item action href="#link8">
              Bilingual Medical Assistant
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <p>
                  jakhysdgkhjagdefkhadgkhsadkhfsdfhdfjhgdskfjhgdfjhgsdfkjhgdfkjhgdfkjhdf
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <p>
                  jakhysdgkhjagdefkhadgkhsadkhfsdfhdfjhgdskfjhgdfjhgsdfkjhgdfkjhgdfkjhdf
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <p>
                  jakhysdgkhjagdefkhadgkhsadkhfsdfhdfjhgdskfjhgdfjhgsdfkjhgdfkjhgdfkjhdf
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <p>
                  jakhysdgkhjagdefkhadgkhsadkhfsdfhdfjhgdskfjhgdfjhgsdfkjhgdfkjhgdfkjhdf
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <p>
                  jakhysdgkhjagdefkhadgkhsadkhfsdfhdfjhgdskfjhgdfjhgsdfkjhgdfkjhgdfkjhdf
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                <p>
                  jakhysdgkhjagdefkhadgkhsadkhfsdfhdfjhgdskfjhgdfjhgsdfkjhgdfkjhgdfkjhdf
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link7">
                <p>
                  jakhysdgkhjagdefkhadgkhsadkhfsdfhdfjhgdskfjhgdfjhgsdfkjhgdfkjhgdfkjhdf
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link8">
                <p>
                Health Buddy is seeking a full-time Bilingual (English/Spanish) Medical Assistant (MA) who has knowledge and experience in primary care and preventative services to treat and work with employees of Fresh Mark at their on-site corporate health and wellness center in Salem, OH.

 
                <br/>
If you are a Medical Assistant who wants to work in a setting that emphasizes prevention, wellness, and patient involvement, we want to talk with you!  Join a health care organization where the emphasis is on health outcomes, not patient volume and billing. 

 <br/>
<strong>This is a 40 hour per week position with:</strong>

<div>
  <ul>
    <li>Excellent compensation</li>
    <li>Full benefits including medical, dental, vision; as well as FSA and HSA options</li>
    <li>Life and disability </li>
    <li>No nights, no on-call, and no holidays </li>
    <li>Predictable hours – so you can balance work and life! </li>
  </ul>

</div>
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
