import styled from 'styled-components';

export default styled.a`
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
