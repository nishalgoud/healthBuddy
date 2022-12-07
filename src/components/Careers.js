import React, { useEffect, useState } from "react";
import { Container, Tab, Row, ListGroup, Col, Button } from "react-bootstrap";
import CareersService from "../services/CareersService";

export function Careers() {
  const [jobsList, setJobsList] = useState([]);
  const [jobDescription, setJobDescription] = useState("");
  const [benifits, setBenifits] = useState("");
  const [id, setId] = useState(0);
  const getJobsList = async () => {
    const { code, jobsList: list } = await CareersService.get().getJobsList();
    if (!code) {
      return;
    }
    setJobsList(list);
    if (list.length) {
      const { jobId, description, benifits: jobBenifits } = list[0];
      setId(jobId);
      setJobDescription(description);
      setBenifits(jobBenifits);
    }
  };

  useEffect(() => {
    getJobsList();
  }, []);
  return (
    <Container>
      <Row>
        <h1>Open opportunities</h1>
      </Row>
      <Row>
        <p>See if there's a position for you - we’re hiring! </p>
      </Row>
      <Tab.Container>
        <Row>
          <Col sm={4}>
            <ListGroup as="ol" numbered>
              {jobsList?.map((item) => {
                const {
                  jobId,
                  name,
                  description,
                  benifits: jobBenifits,
                } = item;
                return (
                  <ListGroup.Item
                    action
                    onClick={() => {
                      setId(jobId);
                      setJobDescription(description);
                      setBenifits(jobBenifits);
                    }}
                  >
                    {name}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>

          <Col sm={8}>
            {id && (
              <Container>
                <p>{jobDescription} </p>
                <strong>This is a 40 hour per week position with:</strong>
                <div>
                  {benifits && (
                    <ul>
                      {benifits.split(";").map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  )}
                </div>
                <div style={{ textAlign: "right" }}>
                  {" "}
                  <Button variant="secondary">Apply Now</Button>
                </div>
              </Container>
            )}
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
