// src/components/AboutSection.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AboutSection = () => (
  <AboutContainer>
    <AboutTitle>About Us</AboutTitle>
    <AboutText>
      At our gym, we are committed to helping you achieve your fitness goals. With expert trainers, top-of-the-line equipment, and a welcoming community, we provide the support and motivation you need to succeed. Whether you're a seasoned athlete or just starting out, our gym is the perfect place to start your fitness journey.
    </AboutText>
  </AboutContainer>
);

export default AboutSection;
