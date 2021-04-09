import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { GlobalTypeStyles } from 'styled-typography'
import evening from './assets/evening.jpg'

const GlobalStyle = createGlobalStyle`
  html,body {
    margin: 0;
    padding: 0;
    height: 400vh;

    background-image: url(${evening});
    background-size: cover;
    background-repeat: no-repeat;
    overflow-x: hidden;
  }
`

const typographyTheme = {
  fontSizes: ["3rem", "1.777rem", "1.333rem", "2rem", "0.75rem", "10px"],
  bodyFontFamily: "Geometric Sans-Serif",
  headingFontFamily: "Helvetica Neue, Circular, sans-serif",
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ typography: typographyTheme }} >
      <GlobalStyle />
      <GlobalTypeStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
