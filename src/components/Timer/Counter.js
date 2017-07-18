import styled from 'styled-components';

import { secondaryColor, media } from 'styles';

export default styled.div`
  color: ${secondaryColor};
  font-weight: 700;
  text-align: center;
  font-size: 5em;
  margin-bottom: 5%;

  ${media.tablet`
      margin-bottom: 20px;
    `};
`;
