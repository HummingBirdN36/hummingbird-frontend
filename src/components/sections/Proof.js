import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Section, Container } from "@components/global";

const LinkStyle = styled.a`
  color: #5762d5;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    text-decoration: underline;
  }
`;

const Proof = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "profile-1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "handpiece-1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "handpiece" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => (
      <Section id="how does it work?">
        <Container>
          <h2>Our customers love us 💙</h2>
          <br />
          <br />
          {/* <Grid>
            <div>
              <h3>1. Tell us your decor goals</h3>
              <p>
                Fill out a{" "}
                <LinkStyle
                  href="https://tolu6.typeform.com/to/CAZzBm"
                  target="_blank"
                >
                  Decor Profile
                </LinkStyle>
                . Share your home style, tastes and price preferences with your
                personal decorator.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid> */}
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h3>Niharika, Bay Area</h3>
              <p>
                "Hummingbird is like getting a recommendation from a friend. I
                really really liked what they picked out! It goes well with the
                color theme of the room."
              </p>
            </div>
          </Grid>
          <br />
          <br />
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h3>Arjun, Toronto</h3>
              <p>
                Choose from 3-5 hand-selected home decor pieces in each category
                you request. Get up 2 revisions. <br />
                <br />
                We get you to exactly what you'll like.
              </p>
            </div>
          </Grid>
          <br />
          <br />
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h3>Aniea, California</h3>
              <p>
                This stuff is absolutely beautiful and spot on! <br />
                <br />
              </p>
            </div>
          </Grid>
          <h2>Hummingbird is fast in every way that matters.</h2>
        </Container>
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

  ${(props) =>
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

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${(props) =>
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
  max-width: 380px;
  width: 100%;
`;

export default Proof;
