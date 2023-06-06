import { cyan, orange } from "./colors";
import { typeScale } from "./typography";

export const defaultTheme = {
  colors: {
    primary: cyan[500],
    primaryDark: cyan[700],

    tonic: orange[500],
    tonicDark: orange[700],
  },
  typography: { size: typeScale },
};
