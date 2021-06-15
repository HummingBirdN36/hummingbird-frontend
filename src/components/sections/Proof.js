import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section2, Container, SocialContainer } from '@components/global';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

var settings = {
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500,
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
        <SocialContainer>
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
                {/* <div id="socialimage">
                  <img
                    id="quoteimage"
                    src="https://instagram.fyto1-2.fna.fbcdn.net/v/t51.2885-19/s320x320/34709266_1283807998389296_584650176900104192_n.jpg?tp=1&_nc_ht=instagram.fyto1-2.fna.fbcdn.net&_nc_ohc=Rem74NeHR3gAX9TnOG7&oh=d4d57cce528aed7f070c0fea900484c7&oe=6070A2B3"
                  />
                </div> */}
                <p id="quoteperson"> Niharika, Bay Area, California</p>
              </div>
            </div>
            <div>
              <p id="quote">
                "The selections are so spot on
                <br /> I could totally see a lot of these items in my home."
                <div id="sociallabel">
                  {/* <div id="socialimage">
                    <img
                      id="quoteimage"
                      src="https://media-exp1.licdn.com/dms/image/C5603AQHBjHCJtaB6Lg/profile-displayphoto-shrink_400_400/0/1588633764119?e=1620864000&v=beta&t=9tvfJqZt15IO6GquDcTtpd9XYrcOZBPnkQuq8ZSjPak"
                    />
                  </div> */}
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
                {/* <div id="socialimage">
                  <img
                    id="quoteimage"
                    src="https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-19/s320x320/70384640_518777428910492_2396060214605381632_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_ohc=OeT-CptMLqoAX9TZyVK&oh=e19da61e4ea03e12c010bb4a4eb2eb9f&oe=5F21CF53"
                  />
                </div> */}
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
        </SocialContainer>
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
