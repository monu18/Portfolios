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

      {/* University of Illinois */}
      <Education>
        <EducationHeader>
          <Institution>
            University of Illinois at Chicago, IL
          </Institution>
          <Meta>
            <b>Master of Finance &nbsp; &bull; &nbsp; Aug&nbsp;2024&nbsp;&ndash;&nbsp;May&nbsp;2025 &nbsp; &bull; &nbsp; United States &nbsp;&bull; &nbsp;GPA&nbsp;4&nbsp;/&nbsp;4</b>
          </Meta>
        </EducationHeader>
      </Education>

      {/* Mount Carmel College, Bengaluru, India */}
      <Education>
        <EducationHeader>
          <Institution>
            Mount Carmel College, Bengaluru, India
          </Institution>
          <Meta>
            <b>Bachelor of Commerce - Accounting and Finance &nbsp; &bull; &nbsp; Jul&nbsp;2020&nbsp;&ndash;&nbsp;May&nbsp;2023 &nbsp; &bull; &nbsp; India &nbsp; &bull;&nbsp;  GPA&nbsp;-&nbsp;/&nbsp;10</b>
          </Meta>
        </EducationHeader>
      </Education>
    </Section>
  );
}