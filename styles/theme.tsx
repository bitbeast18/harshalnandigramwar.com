import "styled-components";

export interface DefaultTheme {
  colors: {
    primary: string;
    secondary: string;
  };
}

export const theme: DefaultTheme = {
  colors: {
    primary: "black",
    secondary: "white",
  },
};
