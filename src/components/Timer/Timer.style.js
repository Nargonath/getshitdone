import styled from 'styled-components';

import { primaryColor, secondaryColor } from 'styles';

export const Button = styled.button`
  background-color: ${primaryColor};
  color: white;
  border: 0;
  font-weight: 700;
  padding: .8em;
  display: block;
  margin: 0 auto 10px auto;
  width: 80%;
  font-size: 1.5em;
`;

export const Counter = styled.div`
  color: ${secondaryColor};
  font-weight: 700;
  text-align: center;
  font-size: 5em;
  margin-bottom: 5%;
`;

export const TaskName = styled.p`
  color: ${primaryColor};
  font-weight: 400;
  text-align: center;
  font-size: 3em;
  margin: 0;
`;
