import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
  return (
    <ListGroup>
      <Link
        className="list-group-item list-group-item-action"
        action
        to="/"
        tag="a"
      >
        Home
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        action
        to="/add-course"
        tag="a"
      >
        Add Course
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        action
        to="/view-courses"
        tag="a"
      >
        View Courses
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        action
        to="#"
        tag="a"
      >
        About us
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        action
        to="#"
        tag="a"
      >
        Contact us
      </Link>
    </ListGroup>
  );
};

export default Menus;
