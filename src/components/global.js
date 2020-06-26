import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`;

export const Section = styled.section`
  padding: 128px 0;
  overflow: hidden;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 96px 0;
  }

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === 'secondary'
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`;

export const Section2 = styled.section`
  padding: 120px 0;
  overflow: hidden;

  p {
    text-align: center;
    color: white;
    font-size: 65px;
    line-height: 75px;
    letter-spacing: -1.25px;
  }

  #quoteperson {
    font-size: 22px;
  }

  h3 {
    color: white;
    text-align: center;
    font-size: 22px;
  }

  .social-image {
    border-radius: 50%;
  }

  @media (max-width: ${props =>
      props.theme.screen.sm && props.theme.screen.md}) {
    padding: 96px 0;
    #quote {
      font-size: 30px;
      line-height: 45px;
    }

    #quoteperson {
      font-size: 18px;
    }
  }

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === 'secondary'
        ? props.theme.color.white.ctaproof
        : props.theme.color.primary
    }`};
`;
