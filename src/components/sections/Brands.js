import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Section, Container } from "@components/global";
import ExternalLink from "@common/ExternalLink";

import { ReactComponent as PotteryBarnLogo } from "@static/logos/potterybarn.svg";
import { ReactComponent as WayfairLogo } from "@static/logos/wayfair.svg";
import { ReactComponent as BouclairLogo } from "@static/logos/bouclair.svg";
import { ReactComponent as CrateBarrelLogo } from "@static/logos/cratebarrel.svg";
import { ReactComponent as UrbanBarnLogo } from "@static/logos/urbanbarn.svg";
import { ReactComponent as AnthropologieLogo } from "@static/logos/anthropologie.svg";
import { ReactComponent as BBBeyondLogo } from "@static/logos/bbbeyond.svg";

const LOGOS = [
  {
    logo: CrateBarrelLogo,
    link: "https://www.crateandbarrel.com/",
  },
  {
    logo: PotteryBarnLogo,
    link: "http://www.potterybarn.ca/",
  },
  {
    logo: WayfairLogo,
    link: "https://www.wayfair.ca/",
  },
  {
    logo: BouclairLogo,
    link: "https://www.bouclair.com/en/",
  },
  {
    logo: UrbanBarnLogo,
    link: "https://www.urbanbarn.com/",
  },
  {
    logo: AnthropologieLogo,
    link: "https://www.anthropologie.com/new-home",
  },
  // {
  //   logo: BBBeyondLogo,
  //   link: "https://www.bedbathandbeyond.ca/",
  // },
];

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "brands" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => (
      <Section id="brands we shop from" accent>
        <StyledContainer>
          <div>
            <h1>Top quality, guaranteed</h1>
            <LogoGrid>
              {LOGOS.map(({ logo, link }) => (
                <ExternalLink href={link}>{logo()}</ExternalLink>
              ))}
            </LogoGrid>
          </div>
          <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    display: none;
  }
`;

export default UsedBy;
