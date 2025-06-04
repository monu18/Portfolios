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

      {/* Optum */}
      <Job>
        <JobHeader>
          <Company>Optum</Company>
          <Meta>
            Software Engineer &bull; Noida, Uttar&nbsp;Pradesh &bull; Dec&nbsp;2021&nbsp;&ndash;&nbsp;Aug&nbsp;2024
          </Meta>
        </JobHeader>
        <List>
          <ListItem>
            Consolidated 15 legacy behavioral-health systems into a single, cloud-native architecture,
            projected to reduce annual operating costs by&nbsp;$1.4&nbsp;M.
          </ListItem>
          <ListItem>
            Built HIPAA-compliant UI components, an internal announcement dashboard, and a robust
            provider-search feature using Angular, NestJS, GraphQL, and PostgreSQL.
          </ListItem>
          <ListItem>
            Led Spring&nbsp;Boot APIs for SMS outreach and third-party integrations; executed data
            migrations with Kafka, OpenLens, JDBC, and custom Java console utilities.
          </ListItem>
          <ListItem>
            Implemented centralized event tracking: Snowflake for storage, Splunk for logs, and
            Grafana for visualization, boosting platform observability.
          </ListItem>
          <ListItem>
            Partnered with U.S. operations teams to triage and resolve production incidents,
            maintaining a&nbsp;user-reported defect rate below&nbsp;1 %.
          </ListItem>
        </List>

        <Achievements>Achievements</Achievements>
        <List>
          <ListItem>
            Earned consecutive 5-star performance ratings (2021-2024) for ownership and technical
            precision.
          </ListItem>
          <ListItem>
            Received multiple Bravo awards for migrating Kafka topics from Azure to Google Cloud
            Platform, enhancing reliability and scalability.
          </ListItem>
        </List>
      </Job>

      {/* Grojha */}
      <Job>
        <JobHeader>
          <Company>Grojha</Company>
          <Meta>
            Co-Founder &bull; Kolkata, West&nbsp;Bengal &bull; Jun&nbsp;2021&nbsp;&ndash;&nbsp;Dec&nbsp;2021
          </Meta>
        </JobHeader>
        <List>
          <ListItem>
            Launched a digital marketplace connecting neighborhood shopkeepers with customers during
            COVID-19 lockdowns.
          </ListItem>
          <ListItem>
            Shipped three Flutter mobile apps and a management dashboard backed by Firebase, Google
            Maps, and Android to enable real-time vendor listings and order tracking.
          </ListItem>
          <ListItem>
            Owned the full product lifecycle from design to Google Play deployment, covering vendor
            onboarding, customer orders, and delivery management.
          </ListItem>
          <ListItem>
            Coordinated on-ground operations with 30 + local stores, iterating on logistics and user
            support for rapid market penetration.
          </ListItem>
        </List>

        <Achievements>Achievements</Achievements>
        <List>
          <ListItem>
            Completed 500 + deliveries and onboarded 30 + vendors in just three months, generating
            over ₹ 12,500 in revenue.
          </ListItem>
          <ListItem>
            Grew the “Grojha” and “Grojha Retail” apps to 100 + and 50 + active users,
            respectively.
          </ListItem>
        </List>
      </Job>
    </Section>
  );
}