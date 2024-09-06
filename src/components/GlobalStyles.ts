import { createGlobalStyle } from "styled-components";
import "@fontsource/alata";
import "@fontsource/poppins";

export const GlobalStyle = createGlobalStyle`
    body {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background: #f5f4fa;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', 'Alata', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
    
    }

  code {
 font-family: 'Poppins', 'Alata', sans-serif;
}
    *,
*:before,
*:after {
    box-sizing: border-box;
}

html,
body,
div,
span,
object,
iframe,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
code,
em,
img,
strong,
sub,
sup,
tt,
b,
u,
i,
ol,
ul,
li,
fieldset,
form,
label,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
main,
canvas,
embed,
footer,
header,
nav,
section,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: none;
}

footer,
header,
nav,
section,
main {
    display: block;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

input {
    
    border-radius: 0;
}
a,
button {
    cursor: pointer;
}
`;
