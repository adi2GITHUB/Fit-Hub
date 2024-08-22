// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToAction from '../components/CallToAction';

const HomeContainer = styled.div`
  padding: 20px;
  font-family: 'Roboto', sans-serif;
`;

const Section = styled.section`
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 10px;
`;

const HeroWrapper = styled(Section)`
  background: linear-gradient(135deg, #ff7e5f, #feb47b); /* Vibrant gradient background */
  color: #fff;
  text-align: center;
`;

const FeaturesWrapper = styled(Section)`
  background: #f0f0f0; /* Light background for contrast */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const TestimonialsWrapper = styled(Section)`
  background: #fff; /* White background for testimonials */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CallToActionWrapper = styled(Section)`
  background: #ff7e5f; /* Colorful background for CTA */
  color: #fff;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroWrapper>
        <HeroSection />
      </HeroWrapper>
      <FeaturesWrapper>
        <FeaturesSection />
      </FeaturesWrapper>
      <TestimonialsWrapper>
        <TestimonialsSection />
      </TestimonialsWrapper>
      <CallToActionWrapper>
        <CallToAction />
      </CallToActionWrapper>
    </HomeContainer>
  );
};

export default Home;


