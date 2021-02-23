import { createGlobalStyle } from 'styled-components';
import Helvetica from '../fonts/helvetica.otf';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
	@font-face {
		font-family: Montserrat;
		src: url(${Helvetica});
    }
    body {
        -webkit-font-smoothing: antialiased !important;
    }
    body, input, button {
		font: 14px 'Helvetica', sans-serif;
    }
    html, body, #root {
        height: 100%;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
    }
`;
