import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding-top: 1rem;
  max-width: max-w-370;
  margin: 0 auto;
`;

const Header = styled.h2``;

const Block = styled.div`
  margin-bottom: 2rem;
`;


/* ----------  NEW LINK STYLE  ---------- */
const StyledLink = styled.a`
  color: #1a73e8;              /* Google-blue */
  text-decoration: underline;
  &:hover,
  &:focus {
    color: #0b57d0;            /* Slightly darker on hover */
  }
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
      <Header>Certification</Header>

      {/* ACHIEVEMENTS */}
      {/* <Block>
        <BlockHeader>
          <Institution>Community Involvement</Institution>
        </BlockHeader>
        <List>
          <ListItem>
            Executive&nbsp;Member at{" "}
            <StyledLink
              href="https://magadh-misson-foundation.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Magadh Mission Foundation
            </StyledLink>
            , an NGO providing education and health-awareness programs in
            Delhi-NCR.
          </ListItem>
        </List>
      </Block> */}

      {/* CERTIFICATIONS */}
      <Block>
        <List>
          <ListItem>
            <StyledLink
              href="https://www.coursera.org/account/accomplishments/verify/CC3JW93LMA9G"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accounting System Structure and Information Managemen
            </StyledLink>{" "}
            — New York Institute of Finance • Dec 2022
          </ListItem>
        </List>
      </Block>
    </Section>
  );
}