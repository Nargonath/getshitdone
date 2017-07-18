import styled from 'styled-components';

import { primaryColor, secondaryColor, media } from 'styles';

export default styled.input`
  display: block;
  border: 0;
  border-bottom: 1px solid ${primaryColor};
  margin: 10% auto;
  width: 80%;
  font-size: 1.5em;
  background-color: transparent;

  &::placeholder {
    color: ${secondaryColor};
    opacity: 0.6;
  }

  ${media.tablet`
    width: 300px;
    margin: 40px auto;
  `};
`;
