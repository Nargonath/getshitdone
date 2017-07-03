import { css } from 'styled-components';

const sizes = {
  desktop: 1024,
  laptop: 768,
  tablet: 420,
};

// taken from: https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md#media-templates
export const media = Object.keys(sizes).reduce((acc, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  acc[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${ css(...args) }
    }
  `;

  return acc;
}, {});
