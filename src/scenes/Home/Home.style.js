import styled from 'styled-components';

import { media } from 'styles';

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

  font-family: 'Open Sans';
  font-weight: 400;
  padding-bottom: 70px;
  font-size: 12px;

  ${media.desktop`
      font-size: 14px;
    `} ${media.big`
      font-size: 18px;
    `};
`;

export const Logo = styled.img`
  display: block;
  margin: 10% auto 5% auto;
  width: 150px;
  height: auto;

  ${media.tablet`
      display: inline-block;
      margin: 30px 50px;
    `} ${media.desktop`
      margin-bottom: 5%;
    `} ${media.big`
      margin-bottom: 10%;
    `};
`;
