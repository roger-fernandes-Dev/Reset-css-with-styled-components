import { createGlobalStyle } from "styled-components";
const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: red;
  }

`
function MyApp({ Component, pageProps }) {
  return (
      <>
        <GlobalStyled />
        <Component {...pageProps} />
      </>

  )
}

export default MyApp
