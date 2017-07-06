import React from 'react';

import { StyledFooter, P, A, Br } from './Footer.style';

function Footer() {
  return (
    <StyledFooter>
      <P>
        Created with &hearts; by <A href="https://twitter.com/jonas_pauthier">@Jonas_Pauthier</A> (code){' '}
        <Br /> and <A href="http://jeremy-fermine.com/">Jeremy Fermine</A> (design)
      </P>
    </StyledFooter>
  );
}

export default Footer;
