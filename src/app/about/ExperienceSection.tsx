import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 1rem;
  max-width: max-w-370;
  margin: 0 auto;
`;

const Header = styled.h2``;

const Job = styled.div`
  margin-bottom: 2rem;
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
`;

const Company = styled.h3`
  margin: 0;
  color: #222;
`;

const Achievements = styled.h3`
  margin: 0;
  color: #222;
  font-weight: 300;
`;

const Meta = styled.div`
  font-size: 1rem;
  color: #777;
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
    content: '•';
    position: absolute;
    left: -1rem;
    color: #555;
    font-size: 1.5rem;
    line-height: 1;
    top: 0.2rem;
  }
`;

export default function ExperienceSection() {
  return (
    <Section>
      <Header>Experience</Header>

      {/* University of Illinois */}
      <Job>
        <JobHeader>
          <Company>University of Illinois</Company>
          <Meta>
            <b>Financial Markets & Investment Analyst &bull; Chicago, IL &bull; Jan&nbsp;2025&nbsp;&ndash;&nbsp;May&nbsp;2025</b>
          </Meta>
        </JobHeader>
        <List>
          <ListItem>
            Created Excel-based financial modeling templates and analytical frameworks for investment valuation and portfolio analysis coursework.
          </ListItem>
          <ListItem>
            Provided technical support to students on Python and R statistical applications for financial data analysis and risk assessment.
          </ListItem>
        </List>

        <Achievements>Achievements</Achievements>
        <List>
          <ListItem>
            Designed Excel-based valuation templates that improved class portfolio analysis efficiency by 30%.
          </ListItem>
        </List>
      </Job>

      {/* Verbinden Communication Pvt Ltd */}
      <Job>
        <JobHeader>
          <Company>Verbinden Communication Pvt Ltd</Company>
          <Meta>
            <b>Jr Financial Analyst &bull; Bengaluru, India &bull; May&nbsp;2023&nbsp;&ndash;&nbsp;Apr&nbsp;2024</b>
          </Meta>
        </JobHeader>
        <List>
          <ListItem>
            Utilized NetSuite ERP to extract and analyze financial data, supporting financial modeling and variance analysis for budgeting, forecasting, and capital allocation decisions.
          </ListItem>
          <ListItem>
            Analyzed company financial data and prepared detailed reports on revenue performance, cost structures, and profitability trends for management review.
          </ListItem>
        </List>

        <Achievements>Achievements</Achievements>
        <List>
          <ListItem>
            Automated variance analysis reporting in NetSuite ERP, reducing manual reporting time by 45%.
          </ListItem>
          <ListItem>
            Delivered executive-ready revenue & cost reports, influencing a budget reallocation that improved profitability.
          </ListItem>
        </List>
      </Job>
    </Section>
  );
}