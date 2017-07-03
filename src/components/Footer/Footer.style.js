import styled from 'styled-components';

import { primaryColor } from 'styles';

export const StyledFooter = styled.footer`
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  text-align: center;
  background-color: ${primaryColor};
`;

export const P = styled.p`
  display: inline-block;
  vertical-align: middle;
`;

export const A = styled.a`
  color: white;
  text-decoration: none;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    border-bottom: 1px solid white;
    left: 0;
    right: 0;
    bottom: -2px;
  }
`;
