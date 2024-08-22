// src/pages/Services.js
import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  padding: 50px 20px;
  background-color: #f7f7f7;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;

const ServicesTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const ServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  h2 {
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesTitle>Our Services</ServicesTitle>
      <ServicesGrid>
        <ServiceCard>
          <h2>Personal Training</h2>
          <p>Get customized workout plans and personal guidance from our expert trainers.</p>
        </ServiceCard>
        <ServiceCard>
          <h2>Group Classes</h2>
          <p>Join our fun and energetic group classes for a motivational workout experience.</p>
        </ServiceCard>
        <ServiceCard>
          <h2>Nutrition Counseling</h2>
          <p>Receive expert advice on diet and nutrition to complement your fitness regimen.</p>
        </ServiceCard>
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;

