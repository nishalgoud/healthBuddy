import React, {useState} from 'react'
import { Button, Form, Card } from "react-bootstrap";

import {  useNavigate } from "react-router-dom";

import { LOGIN_PATH } from "../constants";
import LoginService from "../services/LoginService";

export function ResetPasswordPage() {

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { code, message } =
      await LoginService.get().resetPassword({ email, password: newPassword });
    alert(message);
    if (!code) {
      return;
    }
    navigate(LOGIN_PATH);
  };
  return (
    <Card className="cardBody">
    <Card.Header>Reset Password</Card.Header>
    <Card.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"   required
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="New Password"   required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm New Password"   required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}/>
        </Form.Group>

        <Button variant="secondary" type="submit">
          Change Password
        </Button>
      </Form>
    </Card.Body>
  </Card>
  )
}
