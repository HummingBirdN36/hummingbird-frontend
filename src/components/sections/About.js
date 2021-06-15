import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

// const LinkStyle = styled.a`
//   color: #5762d5;
//   text-decoration: none;
//   transition: 0.5s;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "howitworks" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="how does it work?">
        <Container>
          <h2 style={{ marginBottom: '15px', textAlign: 'center' }}>
            Enjoy the process with Homeboard.
          </h2>
          <h3
            className="caption"
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            Get stylish home decor product recommendations and styling
            suggestions for your house or apartment in 5 simple steps. Go from
            decorating in a few weeks to a few days.
          </h3>
          <Grid inverse>
            <Text>
              <div style={{ marginBottom: '30px' }}>
                <h3>1. Tell us what you like</h3>
                <p className="subheading">
                  Go through our onboarding form and let us know what interior
                  style suits you.
                </p>
              </div>
              <div style={{ marginBottom: '30px' }}>
                <h3>2. Get curator bids</h3>
                <p className="subheading">
                  Within a few hours get bids from vetted curators.
                </p>
              </div>
              <div style={{ marginBottom: '30px' }}>
                <h3>3. Select a curator</h3>
                <p className="subheading">
                  We’ll provide all the information needed to accurately pick
                  the right person for your style.
                </p>
              </div>
              <div style={{ marginBottom: '30px' }}>
                <h3>4. Begin curating</h3>
                <p className="subheading">
                  Your curator gets to work curating products that fit your
                  style, space and budget.
                </p>
              </div>
              <div>
                <h3>5. Enjoy your space</h3>
                <p className="subheading">
                  In under a week, you receive your final recommendation. You
                  can buy the items on your own or through us and get savings!
                </p>
              </div>
            </Text>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
        <h2 style={{ paddingTop: '150px', textAlign: 'center' }}>
          But don’t just take it from us...
        </h2>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  h3 {
    margin-bottom: 13px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 700px;
  width: 100%;
`;

export default About;
