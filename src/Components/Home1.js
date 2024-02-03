import React from "react";
import { Container, Button } from "reactstrap";

const Home = () => {
  return (
    <div class="jumbotron" className="text-center bg-light">
      <h1>
        Learning React <br />
      </h1>
      <p>
        This is the discruption for the project and it is written in home .js
        page
      </p>
      <Container>
        <Button color="primary">
          Start Using
          <br />
        </Button>
        <p> </p>
      </Container>
      <p className="text-center bg-light">
        {" "}
        <br />
      </p>
    </div>
  );
};

export default Home;
