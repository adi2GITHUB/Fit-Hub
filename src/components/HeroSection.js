// src/components/HeroSection.js
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  border-radius: 10px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroTitle>Welcome to FitHub Gym</HeroTitle>
    </HeroContainer>
  );
};

export default HeroSection;


