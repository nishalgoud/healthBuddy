import React, { useState } from "react";
import { Button, Form, Card, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { RESET_PASSWORD_PATH, HOME_PATH } from "../constants";
import LoginService from "../services/LoginService";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemembermeChecked, setIsRemembermeChecked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { code, message = "user logged in successfully" } =
      await LoginService.get().login({ email, password });
    alert(message);
    if (!code) {
      return;
    }
    navigate(HOME_PATH);
  };
  return (
    <Card className="cardBody">
      <Card.Header>Login</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Check
                type="checkbox"
                label="Remember me"
                value={isRemembermeChecked}
                onChange={() => setIsRemembermeChecked(!isRemembermeChecked)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Link to={RESET_PASSWORD_PATH}>reset password</Link>
            </Form.Group>
          </Row>
          <Button variant="secondary" type="submit">
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
