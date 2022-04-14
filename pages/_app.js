import { createGlobalStyle } from 'styled-components';
import { SSRProvider } from '@react-aria/ssr';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { storyblokInit, apiPlugin } from '@storyblok/react';

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_SB_PREVIEW_TOKEN,
  use: [apiPlugin],
});

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 16px;
    --orange-100: #FBAF85;
    --orange-200: #D87D4A;
    --black-100: #101010;
    --black-200: #000000;
    --grey-100: #FFFFFF;
    --grey-200: #FAFAFA;
    --grey-300: #F1F1F1;
    --grey-400: #CFCFCF;
    --grey-500: #818181;

    --xs-and-up: 20em;
    --sm-and-up: 33.75em;
    --md-and-up: 56.25em;
    --lg-and-up: 64em;
    --xl-and-up: 90em;
}

*, *:before, *:after {
    box-sizing:border-box;
}

* {
  margin: 0;

    &:focus {
    outline: 1px solid var(--orange-200);
    transition: outline-offset 0.25s ease;
  }
  &:focus:not(:active) {
    outline: 1px solid var(--orange-200);
    outline-offset: 5px;
  }
}

html, body, #__next {
  height: 100%;
}

body {
    padding: 0;
    font-family: 'Manrope';
    line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#__next {
  isolation: isolate;
}

@media (prefers-reduced-data: reduce) {
  img, video {
    display: none;
  }
}
`;

function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
      <Footer />
    </SSRProvider>
  );
}

export default App;
