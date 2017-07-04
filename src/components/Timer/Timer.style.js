import styled from 'styled-components';

import { primaryColor, secondaryColor, media } from 'styles';

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

  ${
    media.tablet`
      width: 300px;
      margin: 0 auto 10px auto;
    `
  }
`;

export const Counter = styled.div`
  color: ${secondaryColor};
  font-weight: 700;
  text-align: center;
  font-size: 5em;
  margin-bottom: 5%;

  ${
    media.tablet`
      margin-bottom: 20px;
    `
  }
`;

export const TaskName = styled.p`
  color: ${primaryColor};
  font-weight: 400;
  text-align: center;
  font-size: 3em;
  margin: 0;
`;
