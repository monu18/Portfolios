import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 1rem;
  max-width: max-w-370;
  margin: 0 auto;
`;

const Header = styled.h2``;

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
          <Institution>
            University at Buffalo (UB), State University of New York
          </Institution>
          <Meta>
            Master of Science in Computer Science & Engineering &bull; 2024 - Present &bull; USA
          </Meta>
        </EducationHeader>
      </Education>

      <Education>
        <EducationHeader>
          <Institution>Abdul Kalam Technical University</Institution>
          <Meta>
            Bachelor of Technology in Computer Science Engineering &bull; 2017 - 2021 &bull; India &bull; GPA: 8.13 / 10
          </Meta>
        </EducationHeader>
      </Education>
    </Section>
  );
}