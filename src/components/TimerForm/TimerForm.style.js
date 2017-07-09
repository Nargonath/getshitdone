import styled from 'styled-components';

import { primaryColor, secondaryColor, media } from 'styles';

export const Input = styled.input`
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

export const Submit = styled.input`
  background-color: ${primaryColor};
  color: white;
  border: 0;
  font-weight: 700;
  padding: .8em;
  display: block;
  margin: auto;
  width: 80%;
  font-size: 1.5em;
  cursor: pointer;

  ${media.tablet`
      margin: 40px auto;
      width: 300px;
    `};
`;
