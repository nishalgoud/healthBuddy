import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button, Spinner, Badge, Form, Alert } from "react-bootstrap";

import CareersService from "../services/CareersService";
import { CAREER_PATH } from "../constants";

export function JobPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [jobData, setJobData] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const getJobById = async () => {
    setIsFetching(true);
    const { code, jobData: job } = await CareersService.get().getJobById(id);
    if (!code) {
      return;
    }
    setJobData(job);
    setIsFetching(false);
  };

  const handleSubmit = async () => {
    const fileData = new FormData();
    fileData.append("file", file);
    console.log(file, "file");
    const { code , message} = await CareersService.get().upload(fileData);
    
    if (!code) {
      alert(message);
      return;
    }
    alert('job applied successfully');
    navigate(CAREER_PATH);
   
  };

  const handleFileChange = (e) => {
    if (!e.target.files) {
      return;
    }

    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (id) {
      getJobById();
    }
  }, []);
  const { name, description, benifits } = jobData;
  if (isFetching) {
    return <Spinner animation="border" variant="secondary" />;
  }
  return (
    <Container>
      <h1>
        Job Details : <br />
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
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Resume</Form.Label>
        <Form.Control
          type="file"
          accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleFileChange}
        />
      </Form.Group>

      <Button variant="secondary" onClick={handleSubmit} disabled={!file}>
        Submit
      </Button>
    </Container>
  );
}
