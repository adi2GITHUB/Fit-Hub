// src/pages/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  overflow: hidden;
`;

const MapContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://maps.googleapis.com/maps/api/staticmap?center=YOUR_LOCATION&zoom=14&size=600x300&key=YOUR_API_KEY') no-repeat center center;
  background-size: cover;
  filter: blur(8px);
  z-index: 1;
`;

const FormContainer = styled.div`
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9); /* Slightly transparent white */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

const FormTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const FormField = styled.div`
  margin-bottom: 15px;
  & label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
  }
  & input, & textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  & textarea {
    resize: vertical;
    min-height: 150px;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <ContactContainer>
      <MapContainer />
      <FormContainer>
        <FormTitle>Contact Us</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormField>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormField>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;




