import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 1rem;
  max-width: max-w-370;
  margin: 0 auto;
`;

const Header = styled.h2`

`;

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

// const Role = styled.span`
//   font-weight: 600;
//   color: #555;
// `;

const Meta = styled.div`
  font-size: 1rem;
  color: #777;
`;

const List = styled.ul`
  margin-top: .5rem;
  padding-left: 2rem;
`;

const ListItem = styled.li`
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size:large;
`;

export default function ExperienceSection() {
  return (
    <Section>
      <Header>Experience</Header>

      <Job>
        <JobHeader>
          <Company>Carlson Analytics Lab</Company>
          <Meta>Data Science Consultant &bull; Minneapolis, MN &bull; Aug 2024 - Present</Meta>
        </JobHeader>
        <List>
          <ListItem>Built an in-house NLP-based classifier to automate the categorization of 100+ types of manually submitted airline safety reports, improving classification efficiency and enabling real-time trend detection for critical safety interventions.</ListItem>
          <ListItem>Conducted geospatial clustering analyses using Python to optimize warehouse placement across five sites, reducing transportation costs by 18% and improving operational efficiency by 30%.</ListItem>
        </List>
      </Job>

      <Job>
        <JobHeader>
          <Company>Uber</Company>
          <Meta>Senior Data Analyst &bull; Hyderabad, IN &bull; Aug 2022 - Jul 2024</Meta>
        </JobHeader>
        <List>
          <ListItem>Designed and deployed automated payment ETL pipelines in Python to integrate 12+ data sources, streamlining operations across Taiwan and Japan, saving 400+ annual operational hours, and uncovering fee corrections generating $60K in additional revenue.</ListItem>
          <ListItem>Led a team of 3 analysts in roadmap prioritization and conducted A/B testing on incentive campaigns using exploratory analysis and statistical modeling, driving market expansion and revamping city launch strategies.</ListItem>
          <ListItem>Spearheaded KPI tracking model using SQL & Python to monitor lead-to-driver funnel conversion, streamlining onboarding processes and contributing to a $1.2B+ revenue pipeline critical for Uber&apos;s growth.</ListItem>
          <ListItem>Collaborated with cross-functional teams to launch a Market Intelligence Dashboard in Data Studio, supporting competitive benchmarking and industry analysis of Uber&apos;s top competitors in the US and Canada.</ListItem>
        </List>
      </Job>

      <Job>
        <JobHeader>
          <Company>Fractal Analytics</Company>
          <Meta>Data Science Analyst &bull; Bangalore, IN &bull; Aug 2021 - Jul 2022</Meta>
        </JobHeader>
        <List>
          <ListItem>Conducted exploratory data analysis (EDA) on purchasing data to identify seasonal trends and anomalies and built a regression model for medium-term sales forecasting, improving demand planning accuracy by 35%.</ListItem>
          <ListItem>Enhanced SQL scripts to extract 500+ unstructured blueprints from DynamoDB, mapping them to structured milestone data in RDS, facilitating data-driven decisions with 97% accuracy in reconstructing lost data via imputation techniques.</ListItem>
          <ListItem>Initiated and maintained PowerBI dashboards, restructuring monthly business review reports across 50+ global markets across US & C.</ListItem>
        </List>
      </Job>

      <Job>
        <JobHeader>
          <Company>Data Analytics Trainee</Company>
          <Meta>May 2021 - Jun 2021</Meta>
        </JobHeader>
        <List>
          <ListItem>Identified and resolved data gaps from creation to business intelligence dashboards, ensuring 98% accurate data troubleshooting.</ListItem>
        </List>
      </Job>
    </Section>
  );
}
