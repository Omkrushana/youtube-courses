import React from "react";
import { Container,  Button } from "reactstrap";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

const Home = () => {
  return (
    <div class="jumbotron" fluid className="hero-section">
      {/* Hero Section */}
        <Container>
          <h1 className="display-4">Welcome to XYZ Tech Solutions</h1>
          <p className="lead">
            Crafting innovative software solutions to power your business forward.
          </p>
          <Link to="/conatact-us" className="btn btn-primary">
            Get in Touch
          </Link>
        </Container>

      {/* About Us Section */}
      <Container className="about-us-section">
        <h2>About Us</h2>
        <p>
          XYZ Tech Solutions is a leading software development company dedicated to delivering high-quality and innovative solutions. With a team of experienced professionals, we specialize in custom software development, mobile app development, web development, and more.
        </p>
        <p>
          Our mission is to empower businesses through technology, providing tailored solutions that drive growth and efficiency. Explore our services and discover how we can transform your ideas into reality.
        </p>
      </Container>

      {/* Featured Services Section */}
      <Container className="featured-services-section">
        <h2>Featured Services</h2>
        <div className="service-card">
          <h3>Custom Software Development</h3>
          <p>
            We create bespoke software solutions tailored to meet your unique business requirements. From idea to implementation, we've got you covered.
          </p>
        </div>
        <div className="service-card">
          <h3>Mobile App Development</h3>
          <p>
            Elevate your business with user-friendly and feature-rich mobile applications. Our team excels in developing apps for iOS and Android platforms.
          </p>
        </div>
        <div className="service-card">
          <h3>Web Development</h3>
          <p>
            Build a strong online presence with our expert web development services. We design and develop responsive and scalable websites tailored to your brand.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Home;
