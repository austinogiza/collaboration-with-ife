import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  background: #f2f6ff;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

`