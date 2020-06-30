import { createGlobalStyle } from 'styled-components'
import Theme from "./theme";

const GlobalStyle = createGlobalStyle`
    html,
      body {
        padding: 0;
        margin: 0;
        font-family: ${Theme.fonts.body};
        font-size: 14px;
        background-color: white;
        color: black;
        overflow: ${({ overflow }) => overflow};;
      }
      a:link, a:hover, a:visited {
        text-decoration: none;
        color: white;
      }
      a:hover {
        color: #7234F8;
      }
      * {
        box-sizing: border-box;
      }
      H1 {
        font-family: ${Theme.fonts.heading};
        margin: 0px;
        padding: 0px;
        text-decoration: none;
        font-weight: normal;
        margin-bottom: 40px;
        font-size: 32px;
      }

      H2{
        font-size: 18px;
        font-weight: bolder;
        margin-bottom: 20px;
        margin-top: 20px;
      }

      H3{
        font-size: 18px;
        line-height: 20px;
      }

      H4{
        font-size: 16px;
        line-height: 20px;
      }
      p {
        font-size: 14px;
      }
      input {
        color: white;
      }
      ul {
        list-style: none;
      }
      li:before {
        content: "+";
        margin-right: 4px;
      }
      li {
        padding: 5px;
        font-size: 18px;
      }
      button {
        font-size: 14px;
      }
`;

export default GlobalStyle;