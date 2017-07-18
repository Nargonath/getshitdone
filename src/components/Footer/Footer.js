import styled from 'styled-components';

import { primaryColor, media } from 'styles';

export default styled.footer`
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  text-align: center;
  background-color: ${primaryColor};
  padding: 10px;
  display: flex;
  font-weight: 100;

  ${media.tablet`
      height: 30px;
    `};
`;
