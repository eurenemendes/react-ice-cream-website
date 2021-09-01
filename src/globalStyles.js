import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Kanit', sans-serif;
    }
    *{
        /* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 4px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, rgba(180,60,34,1) 0%, rgba(253,88,29,1) 50%, rgba(252,194,69,1) 100%);
}
    }
`;