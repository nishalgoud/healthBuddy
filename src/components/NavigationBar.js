import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";

import {
  SIGNUP_PATH,
  LOGIN_PATH,
  HOME_PATH,
  CAREER_PATH,
  USERS_PATH,
  PROFILE_PATH,
  MY_HEALTH_PATH,
  CONTACT_PATH,
  SUPPLEMENT_INFORMATION_PATH,
} from "../constants";
import CommonService from "../services/CommonService";
import LoginService from "../services/LoginService";
import UserService from "../services/UserService";

export function NavigationBar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await LoginService.get().logOut();
    navigate(LOGIN_PATH);
  };

  const { firstName, lastName } = UserService.get().getUser();
  const isAuthenticated = CommonService.get().isAuthenticated();
  const fullName = firstName + lastName;
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="navigationBar"
      >
        <Navbar.Brand onClick={() => navigate(HOME_PATH)} style={{cursor:'pointer'}}>
          Health Buddy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav className="justify-content-end">

          <Nav.Link onClick={() => navigate(HOME_PATH)}>Home</Nav.Link>
            {isAuthenticated && (
              <>
                
                <Nav.Link onClick={() => navigate(CAREER_PATH)}>
                  Careers
                </Nav.Link>
                <Nav.Link onClick={() => navigate(MY_HEALTH_PATH)}>
                  MyHealthTool
                </Nav.Link>
                <Nav.Link onClick={() => navigate(USERS_PATH)}>Users</Nav.Link>
                
              </>
            )}
<Nav.Link onClick={() => navigate(SUPPLEMENT_INFORMATION_PATH)}>SupplementInformation</Nav.Link>
            <Nav.Link onClick={() => navigate(CONTACT_PATH)}>Contact</Nav.Link>
            {!isAuthenticated && (
              <>
                <Nav.Link onClick={() => navigate(SIGNUP_PATH)}>
                  Sign Up
                </Nav.Link>
                <Nav.Link onClick={() => navigate(LOGIN_PATH)}>Login</Nav.Link>
              </>
            )}

            {isAuthenticated && fullName.length > 0 && (
              <NavDropdown
                title={(firstName ?? '') + (lastName ?? '')}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item onClick={() => navigate(PROFILE_PATH)}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
}
