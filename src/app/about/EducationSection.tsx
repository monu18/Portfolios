import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 1rem;
  max-width: max-w-370;
  margin: 0 auto;
`;

const Header = styled.h2`

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
  margin: 0;
  color: #222;
`;

const Meta = styled.div`
  font-size: 1rem;
  color: #777;
`;

export default function EducationSection() {
  return (
    <Section>
      <Header>Education</Header>

      <Education>
        <EducationHeader>
          <Institution>University Of Minnesota, Carlson School of Management</Institution>
          <Meta>Master of Science, Business Analytics (STEM) &bull; Aug 2025 &bull; Minneapolis, MN</Meta>
        </EducationHeader>
      </Education>

      <Education>
        <EducationHeader>
          <Institution>Savitribai Phule Pune University</Institution>
          <Meta>Bachelor of Technology, Computer Science Engineering &bull; May 2023 &bull; Pune, India</Meta>
        </EducationHeader>
      </Education>
    </Section>
  );
}