import styled from 'styled-components';

import { media } from 'styles';

export default styled.img`
  display: block;

  ${media.tablet`
      display: inline-block;
    `};
`;
