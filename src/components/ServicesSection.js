// src/components/ServicesSection.js
import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  padding: 60px 20px;
  background-color: #e0e0e0;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const ServiceCard = styled.div`
  display: inline-block;
  width: 250px;
  padding: 20px;
  margin: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
`;

const ServicesSection = () => (
  <ServicesContainer>
    <ServicesTitle>Our Services</ServicesTitle>
    <div>
      <ServiceCard>
        <ServiceTitle>Personal Training</ServiceTitle>
        <ServiceDescription>One-on-one sessions with our expert trainers to help you achieve your fitness goals.</ServiceDescription>
      </ServiceCard>
      <ServiceCard>
        <ServiceTitle>Group Classes</ServiceTitle>
        <ServiceDescription>Join our group classes for a motivating and social workout experience.</ServiceDescription>
      </ServiceCard>
      <ServiceCard>
        <ServiceTitle>Nutrition Advice</ServiceTitle>
        <ServiceDescription>Get personalized nutrition plans to complement your workout routine.</ServiceDescription>
      </ServiceCard>
    </div>
  </ServicesContainer>
);

export default ServicesSection;
