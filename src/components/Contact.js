import React, { useEffect, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactService from "../services/ContactService";

export function Contact() {
  const [contactDetails, setContactDetails] = useState({
    inquiryId: 0,
    name: "",
    email: "",
    mobileNumber: "",
    subject: "",
    specificDetails: "",
  });
  const [inquiryTypes, setInquiryTypes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { code, message } =
      await ContactService.get().createContact(contactDetails);
    alert(message);
    if (!code) {
      return;
    }
  };

  const getInquiryTypes = async () => {
    const { code, inquiryTypes: inquiryTypeList } = await ContactService.get().getInquiryTypes();
    if (!code) {
      return;
    }
    setInquiryTypes(inquiryTypeList)
    setContactDetails({...contactDetails,inquiryId: inquiryTypeList[0]?.inquiryId})
  };

  useEffect(() => {
    getInquiryTypes();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop: "1em" }}>Get in Touch</h1>
      <Card className="cardBody">
        <Card.Header>Contact Us</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <p>
                Please provide the following details along with your message so
                we may appropriately assist you.
              </p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your Name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                required
                value={contactDetails.name}
                onChange={(e) =>
                  setContactDetails({ ...contactDetails, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Your e-mail address*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                value={contactDetails.email}
                onChange={(e) =>
                  setContactDetails({
                    ...contactDetails,
                    email: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your telephone Number*</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Enter telephone Number"
                required
                value={contactDetails.mobileNumber}
                onChange={(e) =>
                  setContactDetails({
                    ...contactDetails,
                    mobileNumber: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Type of inquiry*</Form.Label>
              <Form.Select>
                {
                  inquiryTypes?.map(item=>{
                    const { inquiryId, type } = item;
                    return (<option value={inquiryId}>{type}</option>)
                  })
                }
                
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your message"
                required
                value={contactDetails.subject}
                onChange={(e) =>
                  setContactDetails({
                    ...contactDetails,
                    subject: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Specific details about your inquiry*</Form.Label>
              
              <Form.Control
                as="textarea" rows={4}
                placeholder="Enter your message"
                required
                value={contactDetails.specificDetails}
                onChange={(e) =>
                  setContactDetails({
                    ...contactDetails,
                    specificDetails: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Button variant="secondary" type="submit">
              Submit
            </Button>
            <Form.Group className="mb-3">
              <p>
                By submitting this form, you agree to be contacted by a Health
                Buddy representative. This site is protected by the{" "}
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
