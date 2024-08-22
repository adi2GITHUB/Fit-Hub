// src/components/FeaturesSection.js
import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const FeatureCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  margin: 10px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureTitle = styled.h3`
  color: #ff7e5f;
  margin: 10px 0;
`;

const FeatureDescription = styled.p`
  color: #333;
`;

const FeaturesSection = () => {
  return (
    <FeaturesContainer>
      <FeatureCard>
        <FeatureTitle>Personal Training</FeatureTitle>
        <FeatureDescription>Get personalized fitness plans and one-on-one sessions.</FeatureDescription>
      </FeatureCard>
      <FeatureCard>
        <FeatureTitle>Group Classes</FeatureTitle>
        <FeatureDescription>Join our dynamic group classes for a fun workout.</FeatureDescription>
      </FeatureCard>
      <FeatureCard>
        <FeatureTitle>Nutrition Advice</FeatureTitle>
        <FeatureDescription>Receive expert nutrition advice to complement your fitness goals.</FeatureDescription>
      </FeatureCard>
    </FeaturesContainer>
  );
};

export default FeaturesSection;
