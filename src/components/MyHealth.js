import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Container,
  Tab,
  Row,
  Col,
  Form,
  Spinner,
} from "react-bootstrap";
import parse from "html-react-parser";

import { HealthBuddyQuestions } from "./HealthBuddyQuestions";
import { HealthBuddy } from "./HealthBuddy";

export function MyHealth() {
  const [age, setAge] = useState(0);
  const [isPregnant, setIsPregnant] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [healthFinderList, setHealthFinderList] = useState([]);
  const [healthFinder, setHealthFinder] = useState();
  const [healthFinderResult, setHealthFinderResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [sex, setSex] = useState("Male");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const {
        data: { Result },
      } = await axios.get(
        `https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?age=${age}&sex=${sex}&pregnant=${
          isPregnant ? "yes" : "no"
        }`
      );
      const { Resources, MyHFHeading, Total } = Result;

      const allList = Resources["all"]?.["Resource"] ?? [];
      const pregnantList = Resources["pregnant"]?.["Resource"] ?? [];
      const someList = Resources["some"]?.["Resource"] ?? [];
      setHealthFinderList([...allList, ...pregnantList, ...someList]);
      setHealthFinderResult(Result);
      const recommendations =
        Resources["You may also be interested in these health topics:"]
          ?.Resource;
      recommendations && setRecommendations(recommendations);
      console.log(
        Resources["You may also be interested in these health topics:"]
          ?.Resource,
        "data"
      );
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!(10 < age < 50)) {
      setIsPregnant(false);
    }
  }, [age]);

  const { MyHFHeading } = healthFinderResult;
  console.log(healthFinder, 'healthFinder');
  return (
    <>
      <Card style={{ paddingTop: "2em", paddingBottom: "2em" }}>
        <Tab.Container>
          <Row>
            <Col sm={5}>
              <Card>
                <Card.Header>My Health Buddy Tool</Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <p>
                        See which screening tests and vaccines you or your loved
                        ones need to stay healthy.
                      </p>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter name"
                        required
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Sex</Form.Label>
                      <Form.Check
                        label="Male"
                        onChange={() => setSex("Male")}
                        type="radio"
                        checked={sex == "Male"}
                      />
                      <Form.Check
                        label="Female"
                        onChange={(e) => {
                          console.log(e.target.value);
                          setSex("Female");
                        }}
                        type="radio"
                        checked={sex == "Female"}
                      />
                    </Form.Group>
                    {age > 10 && age < 50 && (
                      <Form.Group className="mb-3">
                        <Form.Check
                          label="Pregnant?"
                          type="checkbox"
                          value={isPregnant}
                          onChange={() => setIsPregnant(!isPregnant)}
                        />
                      </Form.Group>
                    )}

                    <Button variant="secondary" type="submit">
                      --{">"} Get Results
                    </Button>
                  </Form>
                </Card.Body>
              </Card>

              <h5 style={{ textAlign: "center", paddingTop: "1em" }}>
                **Make sure your family is up to date on preventive services.**
              </h5>
            </Col>

            <Col sm={7}>
              <Container>
                <h1> Why are we asking these questions ?</h1>
                <HealthBuddyQuestions />
              </Container>
            </Col>
          </Row>
        </Tab.Container>
      </Card>

      {healthFinder ? (
        <HealthBuddy healthFinder={healthFinder} setHealthFinder={setHealthFinder} />
      ) : (
        <>
          {" "}
          {isLoading ? (
            <Spinner animation="border" variant="secondary" size="xxl" />
          ) : (
            <Card>
              <Card.Title
                as="h1"
                style={{ textAlign: "center", padding: "30px 0 " }}
              >
                {MyHFHeading}
              </Card.Title>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "stretch",
                  gap: "35px",
                }}
              >
                {healthFinderList.length > 0 &&
                  healthFinderList.map((item) => {
                    const { MyHFTitle, MyHFDescription, ImageUrl } = item;
                    return (
                      <Card
                        style={{ width: "15%", boxSizing: "border-box", cursor:'pointer' }}
                        onClick={() => setHealthFinder(item)}
                        title={MyHFTitle}
                      >
                        <Card.Img
                          variant="top"
                          src={ImageUrl}
                          width="200"
                          height="300"
                        />
                        <Card.Body>
                          <Card.Title>{MyHFTitle}</Card.Title>
                          {parse(MyHFDescription)}
                        </Card.Body>
                      </Card>
                    );
                  })}
              </div>
            </Card>
          )}
        </>
      )}
    </>
  );
}
