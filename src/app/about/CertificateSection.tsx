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

const BlockHeader = styled.div`
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
      <Header>Achievements &amp; Certifications</Header>

      {/* ACHIEVEMENTS */}
      <Block>
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
      </Block>

      {/* CERTIFICATIONS */}
      <Block>
        <BlockHeader>
          <Institution>Professional Certifications</Institution>
        </BlockHeader>
        <List>
          <ListItem>
            <StyledLink
              href="https://www.coursera.org/account/accomplishments/verify/CC3JW93LMA9G"
              target="_blank"
              rel="noopener noreferrer"
            >
              Object-Oriented Programming in Java
            </StyledLink>{" "}
            — UC San Diego (Coursera) • Dec 15 2023
          </ListItem>

          <ListItem>
            <StyledLink
              href="https://www.coursera.org/account/accomplishments/verify/BTK9VG4H2587"
              target="_blank"
              rel="noopener noreferrer"
            >
              Data Structures
            </StyledLink>{" "}
            — UC San Diego (Coursera) • Dec 12 2023
          </ListItem>

          <ListItem>
            <StyledLink
              href="https://www.coursera.org/account/accomplishments/verify/WV7XBQ2DL952"
              target="_blank"
              rel="noopener noreferrer"
            >
              Algorithmic Toolbox
            </StyledLink>{" "}
            — UC San Diego (Coursera) • Dec 12 2023
          </ListItem>

          <ListItem>
            <StyledLink
              href="https://www.coursera.org/account/accomplishments/verify/YFEWQT7N88LP"
              target="_blank"
              rel="noopener noreferrer"
            >
              Operating Systems and You: Becoming a Power User
            </StyledLink>{" "}
            — Google (Coursera) • Dec 16 2023
          </ListItem>

          <ListItem>
            <StyledLink
              href="https://www.coursera.org/account/accomplishments/verify/P9K2Z76BLKE3"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Bits &amp; Bytes of Computer Networking
            </StyledLink>{" "}
            — Google (Coursera) • Dec 15 2023
          </ListItem>

          <ListItem>
            <StyledLink
              href="https://www.udemy.com/certificate/UC-32f23f3c-e3ca-4657-86ac-a65021474e7c/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Java Masterclass
            </StyledLink>{" "}
            — Udemy • Dec 01 2020
          </ListItem>
        </List>
      </Block>
    </Section>
  );
}