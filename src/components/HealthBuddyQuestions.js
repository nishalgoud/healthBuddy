import React from "react";

import { Accordion, Card } from "react-bootstrap";

export function HealthBuddyQuestions() {
  return (
    <>
      <p>
        MyHealthBuddy gives you personalized recommendations for screenings,
        vaccines, and other preventive services. we ask about things like age
        and sex. We only use your answers to give you the best recommendations
        we can — and we don't share your information with anyone else.
      </p>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Why do we ask about your age ? </Accordion.Header>
          <Accordion.Body>
            <p>
              <span>
                <span>
                  As you get older, your risk of getting certain diseases
                  changes — and you’ll need different screenings based on that
                  risk. For example, adults ages 45 to 75 years need to be
                  screened for colorectal cancer because they’re at higher risk.
                </span>
              </span>
            </p>

            <p>
              <span>
                <span>
                  Many recommendations are based on age, so this question is
                  required — you won’t get recommendations if you don’t answer
                  it.
                </span>
              </span>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why do we ask about your sex ?</Accordion.Header>
          <Accordion.Body>
            <p>
              <span>
                <span>
                  Men and women need different screenings and tests. This is
                  because your risk for some diseases is based on your
                  biological sex, or your sex assigned at birth.
                </span>
              </span>
            </p>

            <p>
              <span>
                <span>
                  Your biological sex may not be the same as your gender
                  identity. If you’re transgender or intersex, you may also want
                  talk with your doctor about which preventive services are
                  recommended for you.
                </span>
              </span>
            </p>

            <p>
              <span>
                <span>
                  Many recommendations are based on sex, so this question is
                  required — you won’t get recommendations if you don’t answer
                  it.
                </span>
              </span>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Why do we ask about pregnancy ?</Accordion.Header>
          <Accordion.Body>
            <p>
              <span>
                <span>
                  People who are pregnant need services like prenatal care, and
                  their babies need important newborn screenings. If you’re
                  pregnant, you’ll get recommendations for both during and after
                  pregnancy.
                </span>
              </span>
            </p>

            <p>
              <span>
                <span>
                  This question is optional — you’ll still get recommendations
                  if you don’t answer it.{" "}
                </span>
              </span>
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
