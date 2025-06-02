import React from "react";
import styled from "styled-components";

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
  width: 100%;
`;


const List = styled.ul`
  margin-top: 0.5rem;
  padding-left: 1.5rem;
  list-style: none;
`;

const ListItem = styled.li`
  position: relative;
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: large;

  &::before {
    content: "•";
    position: absolute;
    left: -1rem;
    color: #555;
    font-size: 1.5rem;
    line-height: 1;
    top: 0.2rem;
  }
`;

export default function CertificationSection() {
  return (
    <Section>
      <Header>Achievements and Licences</Header>

      <Education>
        <EducationHeader>
          <Institution>National Judo Competition</Institution>
          <List>
            <ListItem>
              Secured 3rd rank in the National Judo Competition, recognized by
              the Ministry of Education (Department of School Education and
              Literacy), Government of India.
            </ListItem>
          </List>
        </EducationHeader>
      </Education>

      <Education>
        <EducationHeader>
          <Institution>National Youth Parliament Competition</Institution>
          <List>
            <ListItem>
              Awarded a Special Prize for meritorious performance in the Youth
              Parliament Competition organized by the Government of India.
            </ListItem>
          </List>
        </EducationHeader>
      </Education>

      <Education>
        <EducationHeader>
          <Institution>National Cadet Corps</Institution>
          <List>
            <ListItem>
              Certified participant in the National Cadet Corps program.
            </ListItem>
          </List>
        </EducationHeader>
      </Education>
    </Section>
  );
}
