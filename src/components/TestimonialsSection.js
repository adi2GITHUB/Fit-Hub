// src/components/TestimonialsSection.js
import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TestimonialCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const TestimonialText = styled.p`
  color: #333;
`;

const TestimonialsSection = () => {
  return (
    <TestimonialsContainer>
      <TestimonialCard>
        <TestimonialText>"FitHub Gym has transformed my life. The trainers are top-notch and the community is incredibly supportive!"</TestimonialText>
      </TestimonialCard>
      <TestimonialCard>
        <TestimonialText>"I love the variety of classes offered. Every day is a new challenge and I’m always excited to come back!"</TestimonialText>
      </TestimonialCard>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;

