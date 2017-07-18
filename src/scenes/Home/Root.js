import styled from 'styled-components';

import { media } from 'styles';

export default styled.div`
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
