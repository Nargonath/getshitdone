import React from 'react';

import githubLogo from './github.svg';
import { StyledFooter, P, A, Br, GithubLink } from './Footer.style';

function Footer() {
  return (
    <StyledFooter>
      <P>
        Created with &hearts; by{' '}
        <A href="https://twitter.com/jonas_pauthier" target="_blank">
          @Jonas_Pauthier
        </A>{' '}
        (code) <Br /> and{' '}
        <A href="http://jeremy-fermine.com/" target="_blank">
          Jeremy Fermine
        </A>{' '}
        (design)
      </P>
      <GithubLink href="https://github.com/Nargonath/getshitdone" target="_blank">
        <img src={githubLogo} alt="github getshitdone" />
      </GithubLink>
    </StyledFooter>
  );
}

export default Footer;
