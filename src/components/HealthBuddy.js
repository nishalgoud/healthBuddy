import React from "react";
import parse from "html-react-parser";
import { Card, Button, Accordion } from "react-bootstrap";

export function HealthBuddy({ healthFinder, setHealthFinder }) {
  const { MyHFTitle, MyHFDescription, Sections, ImageUrl, RelatedItems } =
    healthFinder ?? {};
  const sections = Sections["section"] ?? [];
  return (
    <>
    <Card style={{padding:'20px 0'}}>
      <Button variant="secondary" onClick={() => setHealthFinder()} style={{width:'100px'}} >
        {"<"}-- Back
      </Button>
      <h1>{MyHFTitle}</h1>
      
        <Card.Img variant="top" src={ImageUrl}  style={{width:'10%'}} />
        <Card.Body>{parse(MyHFDescription)}</Card.Body>
     
      <Accordion defaultActiveKey="0">
        {sections.length > 0 &&
          sections.map((item, index) => {
            return (
              <Accordion.Item eventKey={index?.toString()}>
                <Accordion.Header> {item.Title ?? MyHFTitle}</Accordion.Header>
                <Accordion.Body>{parse(item.Content)}</Accordion.Body>
              </Accordion.Item>
            );
          })}
      </Accordion>
      </Card>
    </>
  );
}
