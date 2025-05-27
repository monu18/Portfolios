import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Education = styled.div`
  margin-bottom: 2rem;
`;

const EducationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
`;

const Institution = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  color: #222;
`;

const Meta = styled.div`
  font-size: 0.9rem;
  color: #777;
`;

export default function EducationSection() {
  return (
    <Section>
      <Header>Education</Header>

      <Education>
        <EducationHeader>
          <Institution>UNIVERSITY OF MINNESOTA, Carlson School of Management</Institution>
          <Meta>Master of Science, Business Analytics (STEM) &bull; Aug 2025 &bull; Minneapolis, MN</Meta>
        </EducationHeader>
      </Education>

      <Education>
        <EducationHeader>
          <Institution>NATIONAL INSTITUTE OF TECHNOLOGY</Institution>
          <Meta>Bachelor of Technology, Chemical Engineering &bull; Jun 2021 &bull; Raipur, India</Meta>
        </EducationHeader>
      </Education>
    </Section>
  );
}