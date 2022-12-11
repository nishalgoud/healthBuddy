import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Button, Spinner, Badge } from "react-bootstrap";

import CareersService from "../services/CareersService";

export function JobPage() {
  const { id } = useParams();
  const [jobData, setJobData] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const getJobById = async () => {
    setIsFetching(true)
    const { code, jobData: job } = await CareersService.get().getJobById(id);
    if (!code) {
      return;
    }
    setJobData(job);
    setIsFetching(false)
  };

  useEffect(() => {
    if (id) {
      getJobById();
    }
  }, []);
  const { name, description, benifits } = jobData;
  if (isFetching) {
    return <Spinner animation="border"  variant="secondary" />;
  }
  return (
    <Container>
        <h1>
        Job Details : <br/>
        
         <Badge bg="secondary">{name}</Badge>
      </h1>
      <p>{description} </p>
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
    </Container>
  );
}
