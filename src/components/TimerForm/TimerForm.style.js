import styled from 'styled-components';

import { primaryColor } from 'styles';

export const Input = styled.input`
  display: block;
  border: 0;
  border-bottom: 1px solid ${primaryColor};
  margin: 10% auto;
  width: 80%;
  font-size: 1.5em;
  background-color: transparent;

  &:placeholder-shown {
    color: grey;
  }
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
`;
