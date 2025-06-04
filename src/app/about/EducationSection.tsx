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

      {/* University at Buffalo */}
      <Education>
        <EducationHeader>
          <Institution>
            University at Buffalo (UB), State&nbsp;University&nbsp;of&nbsp;New&nbsp;York
          </Institution>
          <Meta>
            Master of Science in Computer Science&nbsp;&amp;&nbsp;Engineering &bull; Aug&nbsp;2024&nbsp;&ndash;&nbsp;Dec&nbsp;2025 &bull; USA &bull; GPA&nbsp;3.8&nbsp;/&nbsp;4
          </Meta>
        </EducationHeader>
      </Education>

      {/* National Institute of Technology Raipur */}
      <Education>
        <EducationHeader>
          <Institution>
            National&nbsp;Institute&nbsp;of&nbsp;Technology&nbsp;Raipur
          </Institution>
          <Meta>
            Bachelor of Technology in Biomedical Engineering &bull; Jul&nbsp;2017&nbsp;&ndash;&nbsp;May&nbsp;2021 &bull; India &bull; GPA&nbsp;7.47&nbsp;/&nbsp;10
          </Meta>
        </EducationHeader>
      </Education>
    </Section>
  );
}