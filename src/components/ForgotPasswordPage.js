import React from 'react'
import { Button, Form, Card } from "react-bootstrap";

export function ForgotPasswordPage() {
  return (
    <Card className="cardBody">
    <Card.Header>Forgot Password</Card.Header>
    <Card.Body>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="secondary" type="submit">
          Change Password
        </Button>
      </Form>
    </Card.Body>
  </Card>
  )
}
