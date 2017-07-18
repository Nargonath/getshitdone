import styled from 'styled-components';

import { media } from 'styles';

export default styled.div`
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
