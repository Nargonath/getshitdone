import styled from 'styled-components';

import { media, secondaryColor } from 'styles';

export const Root = styled.div`
  @font-face {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  }

  @font-face {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  font-family: 'Open Sans';
  font-weight: 400;
  padding-bottom: 70px;
  font-size: 12px;
  max-height: 100vh;

  ${media.desktop`
      font-size: 14px;
    `} ${media.big`
      font-size: 18px;
    `};
`;

export const LogoCtn = styled.div`
  margin: 10% auto 5% auto;
  width: 7.143em;

  ${media.tablet`
      margin: 30px 50px 5vh 50px;
    `} ${media.desktop`
      margin-bottom: 7vh;
    `} ${media.big`
      margin-bottom: 18vh;
    `};
`;

export const Title = styled.h1`
  margin: 0;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${secondaryColor};
  font-size: 1.2em;
`;

export const Logo = styled.img`
  display: block;

  ${media.tablet`
      display: inline-block;
    `};
`;
