import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
${normalize()}
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

    --xs-and-up: 20em;
    --sm-and-up: 33.75em;
    --md-and-up: 56.25em;
    --lg-and-up: 64em;
    --xl-and-up: 90em;
}

*, *:before, *:after {
    box-sizing:inherit;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Manrope';
}
`;

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default App;
