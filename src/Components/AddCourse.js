import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { FormGroup, Input, Label, Form, Container, Button } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add-Course || By Omkrushana";
  }, []);

  const [course, setCourse] = useState({});
  // form handler function
  const handleForm = (e) => {
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
  };
  // Creating function to send data on server via Post data API call

  const postDataToServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("success");  
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Error! Something went wrong");
      }
    );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label for="userId">Course ID</Label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="title">Course title</Label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="description">Course description</Label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 200 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          ></Input>
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">
            Add Course
          </Button>{" "}
          <Button
            type="reset"
            color="warning ml-2"
            onClick={(e) => {
              setCourse({});
            }}
          >
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
