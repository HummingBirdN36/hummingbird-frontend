import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section2, Container } from '@components/global';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

var settings = {
  dots: false,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 5000,
};

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
          name: { eq: "face-1" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "face-2" }
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
    render={data => (
      <Section2 id="social proof" accent="secondary">
        <Container>
          <h3>From our customers</h3>
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
          <Slider {...settings}>
            <div>
              <p id="quote">
                "It's like getting a recommendation from a friend-I didn't have
                to think twice."
              </p>

              <div id="sociallabel">
                <div id="socialimage">
                  <img
                    id="quoteimage"
                    src="https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-19/s320x320/34709266_1283807998389296_584650176900104192_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_ohc=zXtHadsiix4AX93vKHG&oh=5849cfb2f463dd26798197a45c8fc760&oe=5F207433"
                  />
                </div>
                <p id="quoteperson"> Niharika, Bay Area, California</p>
              </div>
            </div>
            <div>
              <p id="quote">
                "The selections are so spot on
                <br /> I could totally see a lot of these items in my home."
                <div id="sociallabel">
                  <div id="socialimage">
                    <img
                      id="quoteimage"
                      src="https://pbs.twimg.com/profile_images/1183088546414022656/dM8IGj5V_400x400.jpg"
                    />
                  </div>
                  <p id="quoteperson"> Arjun, Toronto, Canada</p>
                </div>
              </p>
            </div>
            <div>
              <p id="quote">
                "This stuff is absolutely beautiful! <br /> Its super helpful
                when you're figuring things out for your space."
              </p>

              <div id="sociallabel">
                <div id="socialimage">
                  <img
                    id="quoteimage"
                    src="https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-19/s320x320/70384640_518777428910492_2396060214605381632_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_ohc=OeT-CptMLqoAX9TZyVK&oh=e19da61e4ea03e12c010bb4a4eb2eb9f&oe=5F21CF53"
                  />
                </div>
                <p id="quoteperson"> Aniea, California</p>
              </div>
            </div>
          </Slider>
          {/* <Grid inverse>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
            <div>
              <h3>Niharika, Bay Area</h3>
              <p>
                "Hummingbird is like getting a recommendation from a friend. I
                really really liked what they picked out! It goes well with the
                color theme of my room."
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
                "These recommendations are so spot on, I could totally see a lot
                of these items in my home."
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
                "This stuff is absolutely beautiful its super
                helpful for figuring out where I can buy cool stuff for my
                apartment." <br />
                <br />
              </p>
            </div>
          </Grid> */}
          {/* <br />
          <br />
          <h2>Hummingbird is fast in every way that matters.</h2> */}
        </Container>
      </Section2>
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
    font-size: 22px;
    text-align: center;
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

export default Proof;
