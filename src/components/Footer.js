import React from 'react';

import { Card } from "react-bootstrap";

export function Footer() {
  return (
    <Card className='footer'>
      <Card.Body>Copyright © {(new Date()).getFullYear()} Health Buddy | All rights reserved</Card.Body>
    </Card>
  )
}