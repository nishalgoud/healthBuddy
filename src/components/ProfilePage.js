import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row, Card } from "react-bootstrap";

import UserService from "../services/UserService";

export function ProfilePage() {
  const [validated, setValidated] = useState(false);
  const userData = UserService.get().getUser();

  const [user, setUser] = useState(userData);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
console.log(userData,'userData')
  return (
    <Card className="cardBody">
      <Card.Header>Profile</Card.Header>
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Email address</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  aria-describedby="inputGroupPrepend"
                  required
                  disabled
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>Mobile Number</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="phone"
                  placeholder="Enter mobile number"
                  aria-describedby="inputGroupPrepend"
                  required
                  value={user.mobileNumber}
                  onChange={(e) =>
                    setUser({ ...user, mobileNumber: e.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid mobile number.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              placeholder="Apartment, studio, or floor"
              value={user.address2}
              onChange={(e) => setUser({ ...user, address2: e.target.value })}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                value={user.city}
                onChange={(e) => setUser({ ...user, city: e.target.value })}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                value={user.state}
                onChange={(e) => setUser({ ...user, state: e.target.value })}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Country"
                value={user.country}
                onChange={(e) => setUser({ ...user, country: e.target.value })}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                value={user.zip}
                onChange={(e) => setUser({ ...user, zip: e.target.value })}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button variant="secondary" type="submit">
            Update Profile
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
