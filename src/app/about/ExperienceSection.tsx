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
          <Meta>Data Scientist - Suncountry Airline &bull; Minneapolis, MN &bull; May 2025 - Sept 2025</Meta>
        </JobHeader>
        <List>
          <ListItem>Lead a team of 5 to build a DistilBERT-based NLP pipeline to classify 240k manually submitted airline safety reports into multilevel risk categories, reducing manual review effort by 74% and enabling real-time compliance monitoring.</ListItem>
          <ListItem>Built executive-facing Tableau dashboards highlighting 30/90/180-day safety trends to guide proactive risk mitigation strategies.</ListItem>
          <ListItem>Managed project delivery with Jira and cross-functional collaboration to align compliance, safety, and data teams on milestones.</ListItem>

        </List>
      </Job>
            <Job>
        <JobHeader>
          <Company>Carlson Analytics Lab</Company>
          <Meta>Business Intelligence Consultant &bull; Minneapolis, MN &bull; Aug 2024 - May 2025</Meta>
        </JobHeader>
        <List>
          <ListItem>Guided a $2M warehouse expansion that lowered supply chain costs by 48% for a regional agri-nonprofit by developing a custom ranking algorithm, applying multivariate regression for demand forecasting, and building geospatial Tableau dashboards.</ListItem>
          <ListItem>Drove 18% increase in enrolments by optimizing pricing strategy for an educational services provider using SQL and Python clustering techniques to identify low-sensitivity segments and recommend targeted repricing.</ListItem>
          <ListItem>Identified a 7.4% efficiency change through Exploratory Data Analysis (EDA) and advanced causal techniques (Propensity Score Matching and Difference-in-Differences) in R, guiding leadership to realign operations strategy and improve productivity.</ListItem>

        </List>
      </Job>

      <Job>
        <JobHeader>
          <Company>Union Bank of Switzerland</Company>
          <Meta>Data Analyst &bull; Pune, IN &bull; Jan 2023 - May 2024</Meta>
        </JobHeader>
        <List>
          <ListItem>Reduced booking errors by 35% and saved 40 hours/week by building an automated monitoring tool in the CI/CD pipeline to validate critical transaction scenarios, improving system reliability for compliance reporting.</ListItem>
          <ListItem>Boosted reporting efficiency by 24% by automating identifier assignment and integrating cross-platform data to improve regulatory readiness and reduce manual intervention.</ListItem>
          <ListItem>Improved audit-readiness by 32% by engineering SQL-based ETL pipelines and reconciliation logic across API-fed trade data, enhancing regulatory traceability, ensuring metadata lineage, and strengthening controls for compliance reporting.</ListItem>
          <ListItem>Cut reporting time from 3 days to 4 hours by deploying automated Tableau dashboards to track resolution KPIs.</ListItem>
          <ListItem>Lowered peak-time backlog by 15% through root cause analysis of operational trends, driving better workforce planning.</ListItem>


        </List>
      </Job>

      <Job>
        <JobHeader>
          <Company>Load & Road Inc. (IoT-based consumer electronics)</Company>
          <Meta>Business Data Scientist &bull; Pune, IN &bull; Jan 2022 - Dec 2022</Meta>
        </JobHeader>
        <List>
          
          <ListItem>Successfully launched Teplo (Smart Teapot) in the Japan by partnering with cross-functional teams to execute go-to-market (GTM) strategies; defined post-launch KPIs and dashboards in Power BI to track conversion rates and campaign performance.</ListItem>
          <ListItem>Developed a customer churn prediction model in Databricks using XGBoost; engineered customer engagement and activity log features, applied SHAP to interpret feature impact on churn risk, and drove a 28% lift in subscriber retention.</ListItem>
          <ListItem>Lowered processing time by 38% by building Python and SQL-based ETL workflows to automate complex data transformations.</ListItem>

        </List>
      </Job>

      
    </Section>
  );
}