import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "headerpic" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Text>
              <h1>Decorate your living room in just a few clicks</h1>
              <h3 className="caption">
                Decorating your space shouldn’t be exhausting. With Homeboard,
                you can effortlessly design your space in days not weeks.
              </h3>
              <br />
              <CtaButton>
                <p>
                  <StyledExternalLink href="https://tolu6.typeform.com/to/rq1KcGjE">
                    Start decorating
                  </StyledExternalLink>
                </p>
              </CtaButton>
            </Text>
            <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const CtaButton = styled.button`
  /* default for <button>, but useful for <a> */
  display: inline-block;
  text-align: center;
  text-decoration: none;

  /* create a small space when buttons wrap on 2 lines */
  margin: 2px 0;

  /* invisible border (will be colored on hover/focus) */
  border: solid 1px transparent;
  border-radius: 4px;

  /* size comes from text & padding (no width/height) */
  padding: 0.5em 1em;

  /* make sure colors have enough contrast! */
  color: white;
  background-color: ${props => props.theme.color.cta};
  transition: 0.3s;

  @media (max-width: ${props => props.theme.screen.md}) {
    background-color: ${props => props.theme.color.cta};
  }

  &:hover {
    transform: scale(1.1);
    background-color: ${props => props.theme.color.ctahover};
  }
`;
const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 150%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
    @media (max-width: ${props => props.theme.screen.sm}) {
      display: none;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 170px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: white;
  text-decoration: none;
  font-size:16px;
  font-family: ;

  // &:hover {
  //   color: ${props => props.theme.color.black.regular};
  // }
`;

export default Header;
