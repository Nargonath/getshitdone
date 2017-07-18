import styled from 'styled-components';

import { primaryColor, media } from 'styles';

export default styled.button`
  background-color: ${primaryColor};
  color: white;
  border: 0;
  font-weight: 700;
  padding: .8em;
  display: block;
  margin: 0 auto 10px auto;
  width: 80%;
  font-size: 1.5em;
  cursor: pointer;

  ${media.tablet`
      width: 300px;
      margin: 0 auto 10px auto;
    `};
`;
