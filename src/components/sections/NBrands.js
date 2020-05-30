import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const LinkStyle = styled.a`
  color: #5762d5;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    text-decoration: underline;
  }
`;

const NBrands = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "cerirug" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "vonsbaek" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "joplin" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        art_marjun: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "marjun" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        art_mudcloth: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "mudcloth" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="how does it work?">
        <Container>
          <h1>Recommended Items</h1>
          <br></br>
          <br></br>
          <h2>Rugs</h2>
          {/* <Grid inverse>
            <div>
              <h3>Ceri Grey Indoor/Outdoor Rug</h3>
              <p>
                This rug is a Crate and Barrel Exclusive. Ceri's classic
                geometry takes shape in white and two tones of grey, layering a
                row of large, overlapping diamonds over a field dotted with
                small white diamonds. Easy to care for, this rug lives indoors
                or out, where it can be cleaned with a spray from the garden
                house.
                <br></br>
                Buy this item{' '}
                <LinkStyle
                  href="https://www.crateandbarrel.ca/ceri-grey-indoor-outdoor-rug-9x12/s325711"
                  target="_blank"
                >
                  here
                </LinkStyle>
              </p>
            </div>
          </Grid> */}
          <Grid inverse>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
            <div>
              <h3>Ceri Grey Indoor/Outdoor Rug</h3>
              <p>
                This rug is a Crate and Barrel Exclusive. Ceri's classic
                geometry takes shape in white and two tones of grey, layering a
                row of large, overlapping diamonds over a field dotted with
                small white diamonds. Easy to care for, this rug lives indoors
                or out, where it can be cleaned with a spray from the garden
                house.
                <br></br>
                Buy this item{' '}
                <LinkStyle
                  href="https://www.crateandbarrel.ca/ceri-grey-indoor-outdoor-rug-9x12/s325711"
                  target="_blank"
                >
                  here
                </LinkStyle>
              </p>
            </div>
          </Grid>

          {/* <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h3>VONSBÄK Rug</h3>
              <p>
                Great as a thrifty selection. The vintage expression has the
                charm of looking worn and adds a special character to the room.
                The pile is very low and works just as well by the sofa as under
                the dining table.
                <br></br>
                Buy this item{' '}
                <LinkStyle
                  href="https://www.ikea.com/ca/en/p/vonsbaek-rug-low-pile-green-60450033/"
                  target="_blank"
                >
                  here
                </LinkStyle>
              </p>
            </div>
          </Grid> */}

          <Grid inverse>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
            <div>
              <h3>Joplin Multi Rug</h3>
              <p>
                An assemblage of irregular shapes, the hand-tufted rug creates
                an artfully balanced composition of rose, ochre, plum and navy
                on an off-white ground. Bring modern art from wall to floor.
                <br></br>
                Buy this item{' '}
                <LinkStyle
                  href="https://www.crateandbarrel.ca/joplin-multi-rug-9x12/s394422"
                  target="_blank"
                >
                  here
                </LinkStyle>
              </p>
            </div>
          </Grid>

          <br></br>
          <br></br>
          <br></br>
          <h2>Curtains</h2>
          <br></br>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_marjun.childImageSharp.fluid} />
            </Art>
            <div>
              <h3>Marjun Curtains</h3>
              <p>
                In consideration that some part of this space acts as a bed/
                sleeping area. We recommend blackout curtains so your sleep
                won't be disturbed by moonlight and street lights - or be woken
                by the sun when you want to sleep in late. The heavy fabric
                falls softly and evenly.
                <br></br>
                Buy this item{' '}
                <LinkStyle
                  href="https://www.ikea.com/ca/en/p/marjun-blackout-curtains-1-pair-gray-70298422/"
                  target="_blank"
                >
                  here
                </LinkStyle>
              </p>
            </div>
          </Grid>

          <Grid inverse>
            <Art>
              <Img fluid={data.art_mudcloth.childImageSharp.fluid} />
            </Art>
            <div>
              <h3>Mud Cloth Big Arrows in Cream Blackout Curtain</h3>
              <p>
                Invite the sun inside on your terms. Our blackout window
                curtains are a denser alternative to your standard window
                curtain, blocking out most light. Available in either single or
                double panel options.
                <br></br>
                Buy this item{' '}
                <LinkStyle
                  href="https://society6.com/product/mud-cloth-big-arrows-in-cream_blackout-curtain?sku=s6-9316910p103a251v846a252v849"
                  target="_blank"
                >
                  here
                </LinkStyle>
              </p>
            </div>
          </Grid>
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
  margin: 30px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  p {
    font-size: 18px;
  }

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
  max-width: 380px;
  width: 100%;
`;

export default NBrands;
