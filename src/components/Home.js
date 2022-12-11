import React, { useEffect, useState } from "react";

import { Card, Button, Container, Tab, Row, Col } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { MY_HEALTH_PATH, SUPPLEMENT_INFORMATION_PATH } from "../constants";
import healthCare3 from "../videos/health-care3.mp4";
import healthCare2 from "../videos/health-care2.mp4";
import { FrequentlyAskedQuestions } from "./FrequentlyAskedQuestions";

export function Home() {
  const navigate = useNavigate();

  const [loadDate, setLoadDate] = useState(new Date());
  const [diffInMins, setDiffInMins] = useState(0);
  const msInMinute = 60 * 1000;
  useEffect(() => {
    const timer = setInterval(() => {
      setDiffInMins(parseInt(Math.abs(new Date() - loadDate) / msInMinute));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Tab.Container>
        <Row>
          <Col sm={5}>
            <Card style={{ height: "100%" }}>
              <Card.Body>
                <Card.Title as="h1">Health Buddy</Card.Title>
                <Card.Text>
                  was born from a passion to help people understand their
                  health.
                </Card.Text>
                <div>
                  Thousands of people are suffering with a range of different
                  symptoms that may be misinterpreted for years. Over time they
                  may slowly give way to a host of other problems, including
                  fatigue, depression and severe gut issues and it seems
                  impossible to get any answers from doctors, beyond a repeat
                  prescription.
                </div>
                <Container>
                  <video
                    src={healthCare2}
                    width="100%"
                    autoplay="autoplay"
                    muted
                    loop="loop"
                  />
                </Container>
              </Card.Body>

              <Card.Footer>
                <small className="text-muted">
                  Last updated {diffInMins} mins ago
                </small>
              </Card.Footer>
            </Card>
          </Col>

          <Col sm={7}>
            <Container>
              <video
                src={healthCare3}
                width="100%"
                autoplay="autoplay"
                muted
                loop="loop"
              />
            </Container>
          </Col>
        </Row>
      </Tab.Container>

      <Card>
        <Card.Body>
          <Card.Title as="h1">What is My Health Buddy?</Card.Title>
          <div>Trusted information to help your family stay healthy.</div>
          <div>
            Make sure your family is up to date on preventive services.See which
            screening tests and vaccines you or your loved ones need to stay
            healthy.
          </div>

          <div style={{ textAlign: "right" }}>
            {" "}
            <Button
              variant="secondary"
              onClick={() => navigate(`${MY_HEALTH_PATH}`)}
            >
              Explore MyHealthBuddy -{">"}
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title as="h1">
            Need Knowledge on Dietary Supplements?
          </Card.Title>

          <div>
            Evidence-based summaries for health professionals and consumers on
            specific vitamins, minerals, herbs, and other dietary supplements.<br />
            Fact sheets cover health effects, safety, recommended amounts,
            interactions with medicines, and other topics.
          </div>

          <div style={{ textAlign: "right" }}>
            {" "}
            <Button
              variant="secondary"
              onClick={() => navigate(`${SUPPLEMENT_INFORMATION_PATH}`)}
            >
              Explore SupplementInformation -{">"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
