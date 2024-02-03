import logo from "./logo.svg";
import "./App.css";
import { Button, Row, Col, Container } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./Components/Home";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Course from "./Components/Course";
import Allcourses from "./Components/Allcourses";
import AddCourse from "./Components/AddCourse";
import Header from "./Components/Header";
import Menus from "./Components/Menus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";

function App() {
  const btnHandle = () => {
    toast.success("wow its easy!!!!", { position: "bottom-left" });
  };
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>

            <Col md={8}>
              <Routes>
                <Route path="/" Component={Home} exact></Route>
                <Route path="/add-course" Component={AddCourse} exact></Route>
                <Route
                  path="/view-courses"
                  Component={Allcourses}
                  exact
                ></Route>
                <Route path="/about-us" Component={AboutUs}></Route>
                <Route path="/conatact-us" Component={ContactUs}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
