import React, { useState, useEffect } from "react";
import { Card, Button, Container, Tab, Row, Col } from "react-bootstrap";

import { FrequentlyAskedQuestions } from "./FrequentlyAskedQuestions";
import dietrySupplements1 from "../videos/dietrySupplements1.mp4";
import dietrySupplements2 from "../videos/dietrySupplements2.mp4";

export function SupplementInformation() {
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
            <Card>
              <Card.Body>
                <Card.Title as="h1">
                  Thinking About Taking a Dietary Supplement?
                </Card.Title>

                <div>
                  <p>
                    Some dietary supplements can help you get adequate amounts
                    of essentialnutrients if you don’t eat a nutritious variety
                    of foods. However, supplements can’t take the place of the
                    variety of foods that are important to a healthy diet. To
                    learn more about what makes a healthy diet, the Dietary
                    Guidelines for Americans and MyPlate&nbsp;are good sources
                    of information.
                  </p>

                  <p>
                    Some dietary supplements can improve overall health and help
                    manage some health conditions. For example:&nbsp;
                  </p>

                  <ul>
                    <li>
                      Calcium and{" "}
                      <a
                        href="#"
                        onclick="showTerm('/factsheets/showterm.aspx?tID=348')"
                        class="fscopy"
                      >
                        vitamin D
                      </a>{" "}
                      help keep bones strong and reduce bone loss.&nbsp;
                    </li>
                    <li>
                      <a
                        href="#"
                        onclick="showTerm('/factsheets/showterm.aspx?tID=222')"
                        class="fscopy"
                      >
                        Folic acid
                      </a>{" "}
                      decreases the{" "}
                      <a
                        href="#"
                        onclick="showTerm('/factsheets/showterm.aspx?tID=336')"
                        class="fscopy"
                      >
                        risk
                      </a>{" "}
                      of certain birth defects.
                    </li>
                    <li>
                      <a
                        href="#"
                        onclick="showTerm('/factsheets/showterm.aspx?tID=788')"
                        class="fscopy"
                      >
                        Omega-3 fatty acids
                      </a>{" "}
                      from fish oils might help some people with heart
                      disease.&nbsp;
                    </li>
                    <li>
                      A combination of vitamins C and E,{" "}
                      <a
                        href="#"
                        onclick="showTerm('/factsheets/showterm.aspx?tID=352')"
                        class="fscopy"
                      >
                        zinc
                      </a>
                      ,{" "}
                      <a
                        href="#"
                        onclick="showTerm('/factsheets/showterm.aspx?tID=686')"
                        class="fscopy"
                      >
                        copper
                      </a>
                      ,{" "}
                      <a
                        href="#"
                        onclick="showTerm('/factsheets/showterm.aspx?tID=450')"
                        class="fscopy"
                      >
                        lutein
                      </a>
                      , and{" "}
                      <a
                        href="#"
                        onclick="showTerm('/factsheets/showterm.aspx?tID=75')"
                        class="fscopy"
                      >
                        zeaxanthin
                      </a>{" "}
                      (known as AREDS) may slow down further vision loss in
                      people with{" "}
                      <a
                        href="#"
                        onclick="showTerm('/factsheets/showterm.aspx?tID=692')"
                        class="fscopy"
                      >
                        age-related macular degeneration
                      </a>{" "}
                      (AMD).&nbsp;
                    </li>
                  </ul>

                  <p>
                    Many other supplements need more study to determine if they
                    have value. The{" "}
                    <a
                      href="#"
                      onclick="showTerm('/factsheets/showterm.aspx?tID=190')"
                      class="fscopy"
                    >
                      U.S. Food and Drug Administration
                    </a>{" "}
                    (FDA) does not determine whether dietary supplements are
                    effective before they are marketed.
                  </p>
                </div>
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
                src={dietrySupplements2}
                width="100%"
                autoplay="autoplay"
                muted
                loop="loop"
                controls
              />
            </Container>
          </Col>
        </Row>
        <Row>
          <Col sm={7}>
            <Container>
              <video
                src={dietrySupplements1}
                width="100%"
                autoplay="autoplay"
                muted
                loop="loop"
                controls
              />
            </Container>
          </Col>

          <Col sm={5}>
            <Card>
              <Card.Body>
                <Card.Title as="h1">
                  Dietary Supplements: What You Need to Know?
                </Card.Title>

                <div>
                  Many adults and children in the United States take one or more
                  vitamins or other dietary supplements. In addition to
                  vitamins, dietary supplements can contain minerals, herbs or
                  other botanicals, amino acids, enzymes, and many other
                  ingredients. Dietary supplements come in a variety of forms,
                  including tablets, capsules, gummies, and powders, as well as
                  drinks and energy bars. Popular supplements include vitamins D
                  and B12; minerals like calcium and iron; herbs such as
                  echinacea and garlic; and products like glucosamine,
                  probiotics, and fish oils.
                </div>
                <br />
                <div>
                  This 2-minute video featuring experts from the Office of
                  Dietary Supplements (ODS) at the National Institutes of Health
                  introduces the ODS website. The ODS website has reliable,
                  science-based information on dietary supplements for both
                  consumers and health professionals
                </div>
              </Card.Body>

              <Card.Footer>
                <small className="text-muted">
                  Last updated {diffInMins} mins ago
                </small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Tab.Container>
      <FrequentlyAskedQuestions />
    </>
  );
}
