// src/pages/About.js
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const AboutContainer = styled.div`
  padding: 50px 20px;
  background-color: #f7f7f7;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const AboutContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const About = () => {
  return (
    <AboutContainer>
      <Fade bottom>
        <AboutTitle>About Us</AboutTitle>
        <AboutContent>
        Welcome to FitHub Gym, where your fitness journey becomes a vibrant adventure! At FitHub, we’re more than just a gym; we’re a community committed to helping you achieve your health and wellness goals.

Our state-of-the-art facilities, passionate trainers, and diverse classes are designed to inspire and challenge you. Whether you’re a fitness newbie or a seasoned athlete, our tailored programs and supportive environment will guide you towards success.

Join us at FitHub Gym, where every workout is a step towards a healthier, happier you.


          We are dedicated to helping you achieve your fitness goals. Our experienced trainers and state-of-the-art facilities ensure you have everything you need to succeed.
        </AboutContent>
      </Fade>
    </AboutContainer>
  );
};

export default About;

