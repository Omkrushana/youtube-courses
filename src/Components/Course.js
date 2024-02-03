import axios from "axios";
import React, { useState } from "react";
import base_url from "./../api/bootapi";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
  //   import for model
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { toast } from "react-toastify";

const Course = ({ course, update }) => {
  // put data
  const [modalOpen, setModalOpen] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(course.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    course.description
  );

  // end put
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("Course Deleted");
        // update(id);
      },
      (error) => {
        toast.error("update Not worked");
      }
    );
  };

  const updateCourse = (id) => {
    axios.put(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("Update pop need to add");
        update(id);
      },
      (error) => {
        toast.error("Update pop need to add error");
      }
    );
  };

  // Code for update
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleUpdate = () => {
    // Update the course with the new data
    axios
      .put(`${base_url}/courses`, {
        id: course.id,
        title: updatedTitle,
        description: updatedDescription,
      })
      .then(
        (response) => {
          toast.success("Course Updated");
          // Call the update function to refresh the course list or perform other actions
          update(response.data);

          setUpdatedTitle("");
          setUpdatedDescription("");
        },
        (error) => {
          toast.error("Update Not Worked");
        }
      );

    // Close the modal after updating
    toggleModal();
  };
  return (
    <Card>
      <CardBody className="text-center">
        <CardSubtitle className="text-center" tag="h5">
          {course.title}
        </CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button
            color="danger"
            onClick={() => {
              deleteCourse(course.id);
            }}
          >
            Delete
          </Button>
          {"   "}
          <Button color="warning" onClick={toggleModal}>
            Update
          </Button>
        </Container>
      </CardBody>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Update Course</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="updatedTitle">Title </Label>
            <Input
              type="text"
              id="updatedTitle"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="updatedDescription">Description</Label>
            <Input
              type="textarea"
              id="updatedDescription"
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            />
          </FormGroup>
          <Container>
            <Button color="warning" onClick={handleUpdate}>
              Update
            </Button>{" "}
            <Button color="secondary" onClick={toggleModal}>
              Cancel
            </Button>
          </Container>
        </ModalBody>
      </Modal>
    </Card>
  );
};

export default Course;
