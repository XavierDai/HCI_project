import React from "react";
import Header from "./shared/Header";
import "./Home.css";
import FAQ from "./FAQ";

const services = [
  {
    title: "Book Consult",
    description: "Connect with top medical professionals for consultations.",
  },
  {
    title: "Order Medicine",
    description: "Get your prescriptions delivered to your doorstep.",
  },
  {
    title: "Lab Test",
    description: "Book lab tests and get results online quickly.",
  },
  {
    title: "Track Health",
    description: "Save your health data to keep your BMI updated.",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <Header />

      {/* Welcome Section */}
      <section className="welcome-section">
        <h1 aria-label="Welcome Note">Welcome to MediConnect</h1>
        <p>
          Your health matters. Connect with the best medical professionals and
          services.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-list">
          {services.map((service, index) => {
            return (
              <div className="service" key={index}>
                <h3 aria-label={service.title}>{service.title}</h3>
                <p arial-label={service.description}>{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <FAQ />
      <footer className="footer-section">
        <p>&copy; 2024 MediConnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
