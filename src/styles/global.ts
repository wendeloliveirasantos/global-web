import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}

input {
  color: #22222280;
}

body {
  font: 400 16px sans-serif;
}
html, body {
    min-height: 100vh;
    height: 100%;
}

#__next {
  height: 100%;
}

a {
  text-decoration: none;
}

ul {
    list-style-type: none;
}

input {
  border: none;
}

`

export default GlobalStyle