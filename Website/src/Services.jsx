import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services fade-in">
      <div className="container">
        <h2>Our Services</h2>
        <ul className="service-list">
          <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM177pse0rvCESbX5xhscYIEVbO_t7EmklgQ&s" alt="Cardiology" />
            <span>Cardiology</span>
          </li>
          <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIh9tiEq3AD3qFPOPDw9ynDnfK3jaKWbtlxA&s" alt="Oncology" />
            <span>Oncology</span>
          </li>
          <li>
            <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/04/neurosurgery.jpg" alt="Neurology" />
            <span>Neurology</span>
          </li>
          <li>
            <img src="https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-arthritis-icon-orthopedic-osteoporosis-intervertebral-png-image_4844493.png" alt="Orthopedics" />
            <span>Orthopedics</span>
          </li>
          <li>
            <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/04/icu.jpg" alt="Emergency and Critical Care" />
            <span>Emergency and Critical Care</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Services;
