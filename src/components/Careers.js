import React, { useEffect, useState } from "react";
import {
  Container,
  Tab,
  Row,
  ListGroup,
  Col,
  Button,
  Ratio,
  Carousel,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { JOB_PATH } from "../constants";
import CareersService from "../services/CareersService";
import careersImage1 from "../images/careers1.svg";
import careersImage2 from "../images/careers2.svg";
import careersImage3 from "../images/careers3.svg";

export function Careers() {
  const [jobsList, setJobsList] = useState([]);
  const [jobDescription, setJobDescription] = useState("");
  const [benifits, setBenifits] = useState("");
  const [id, setId] = useState(0);

  const navigate = useNavigate();

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
    <>
      <Carousel  variant="dark">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={careersImage1}
            alt="First slide"
            style={{ height: "25em" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={careersImage2}
            alt="Second slide"
            style={{ height: "25em" }}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={careersImage3}
            alt="Third slide"
            style={{ height: "25em" }}
          />

        </Carousel.Item>
      </Carousel>

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
                      active={jobId == id}
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
                    <Button
                      variant="secondary"
                      onClick={() => navigate(`${JOB_PATH}/${id}`)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </Container>
              )}
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
}
