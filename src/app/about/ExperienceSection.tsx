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

      <Job>
        <JobHeader>
          <Company>Optum</Company>
          <Meta>Software Engineer &bull; Noida, Uttar Pradesh &bull; Aug 2021 - Aug 2024</Meta>
        </JobHeader>
        <List>
          <ListItem>
            Contributed to the Provider Data Commons project, focused on creating a real-time
            provider directory using data sourced from the NDB.
          </ListItem>
          <ListItem>
            Developed streaming components to enhance platform responsiveness, enabling real-time
            provider data access for consumers.
          </ListItem>
          <ListItem>
            Designed and implemented batch ingestion processes using Shell scripts to transfer data
            to Amazon S3, improving data latency and update efficiency.
          </ListItem>
          <ListItem>
            Created and optimized Apache Spark jobs on AWS EMR to perform data aggregation on S3 and
            load processed data into Amazon RDS via Lambda functions and Step Functions.
          </ListItem>
          <ListItem>
            Handled development, testing, and monitoring for batch feeds, data factories, and
            translators related to provider directories.
          </ListItem>
          <ListItem>
            Deployed applications across environments using CI/CD pipelines with Jenkins, ensuring
            seamless integration and delivery.
          </ListItem>
          <ListItem>
            Maintained PDC’s coding standards and supported innovation in big data workflows to adapt
            to evolving business requirements.
          </ListItem>
        </List>

        <Achievements>Achievements</Achievements>
        <List>
          <ListItem>
            Received top performance ratings for ownership, execution, and quality of feature
            delivery.
          </ListItem>
          <ListItem>
            Recognized with multiple Bravo awards for taking the lead and successfully migrating
            Kafka topics from Cassandra to AWS, enhancing the reliability and scalability of team
            repositories.
          </ListItem>
        </List>
      </Job>

      {/* 
      <Job>
        <JobHeader>
          <Company>Uber</Company>
          <Meta>Senior Data Analyst &bull; Hyderabad, IN &bull; Aug 2022 - Jul 2024</Meta>
        </JobHeader>
        <List>
          <ListItem>
            Designed and deployed automated payment ETL pipelines in Python to integrate 12+ data
            sources, streamlining operations across Taiwan and Japan, saving 400+ annual operational
            hours, and uncovering fee corrections generating $60K in additional revenue.
          </ListItem>
          <ListItem>
            Led a team of 3 analysts in roadmap prioritization and conducted A/B testing on incentive
            campaigns using exploratory analysis and statistical modeling, driving market expansion
            and revamping city launch strategies.
          </ListItem>
          <ListItem>
            Spearheaded KPI tracking model using SQL & Python to monitor lead-to-driver funnel
            conversion, streamlining onboarding processes and contributing to a $1.2B+ revenue pipeline
            critical for Uber's growth.
          </ListItem>
          <ListItem>
            Collaborated with cross-functional teams to launch a Market Intelligence Dashboard in
            Data Studio, supporting competitive benchmarking and industry analysis of Uber's top
            competitors in the US and Canada.
          </ListItem>
        </List>
      </Job>

      <Job>
        <JobHeader>
          <Company>Fractal Analytics</Company>
          <Meta>Data Science Analyst &bull; Bangalore, IN &bull; Aug 2021 - Jul 2022</Meta>
        </JobHeader>
        <List>
          <ListItem>
            Conducted exploratory data analysis (EDA) on purchasing data to identify seasonal trends
            and anomalies and built a regression model for medium-term sales forecasting, improving
            demand planning accuracy by 35%.
          </ListItem>
          <ListItem>
            Enhanced SQL scripts to extract 500+ unstructured blueprints from DynamoDB, mapping them
            to structured milestone data in RDS, facilitating data-driven decisions with 97% accuracy
            in reconstructing lost data via imputation techniques.
          </ListItem>
          <ListItem>
            Initiated and maintained PowerBI dashboards, restructuring monthly business review reports
            across 50+ global markets across US & C.
          </ListItem>
        </List>
      </Job>

      <Job>
        <JobHeader>
          <Company>Data Analytics Trainee</Company>
          <Meta>May 2021 - Jun 2021</Meta>
        </JobHeader>
        <List>
          <ListItem>
            Identified and resolved data gaps from creation to business intelligence dashboards,
            ensuring 98% accurate data troubleshooting.
          </ListItem>
        </List>
      </Job>
      */}
    </Section>
  );
}