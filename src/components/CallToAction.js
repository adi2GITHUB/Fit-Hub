// src/components/CallToAction.js
import React from 'react';
import styled from 'styled-components';

const CTAContainer = styled.div`
  background: #ff7e5f; /* Colorful background for CTA */
  color: #fff;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
`;

const CTATitle = styled.h2`
  margin: 0;
  font-size: 2rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: #333; /* Dark background for the button */
  color: #fff; /* White text color */
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #555; /* Slightly lighter background on hover */
    transform: scale(1.05); /* Slight scale effect on hover */
  }
`;

const CallToAction = () => {
  return (
    <CTAContainer>
      <CTATitle>Ready to Get Started?</CTATitle>
      <CTAButton href="/contact">Contact Us</CTAButton>
    </CTAContainer>
  );
};

export default CallToAction;
