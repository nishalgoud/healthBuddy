import React from "react";
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FORGOT_PASSWORD_PATH } from "../constants";

export function Contact() {
  return (
    <>
      <h1 style={{textAlign: 'center',paddingTop:'1em'}}>Get in Touch</h1>
      <Card className="cardBody">
        <Card.Header>Message Us</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <p>
                If you are experiencing a medical emergency, please call 911.
              </p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="phone" placeholder="Enter phone number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" placeholder="Enter company" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Michigan">
                <option>Michigan</option>
                <option>Texas</option>
                <option>Newyork</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>I am a...*</Form.Label>
              <Form.Select defaultValue="Corporate Executive">
                <option>Corporate Executive</option>
                <option>Benefits Consultant</option>
                <option>HR/Total Rewards Professional</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control type="text" placeholder="Enter your message" />
            </Form.Group>

            <Button variant="secondary" type="submit">
              Send
            </Button>
            <Form.Group className="mb-3">
              <p>
                By submitting this form, you agree to be contacted by a Health Buddy representative. This site is protected by
                the{" "}
                <Link to="https://policies.google.com/privacy">
                  Google Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="https://policies.google.com/terms">
                  Terms of Service apply.
                </Link>
              </p>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
