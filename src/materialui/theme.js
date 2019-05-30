import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    /* メインカラー */
    primary: {
      light: "#4ebaaa",
      main: "#00897b",
      dark: "#005b4f",
      contrastText: "#212121" /* テキストカラー(黒) */
    },
    /* アクセントカラー */
    secondary: {
      light: "#ff77a9",
      main: "#ec407a",
      dark: "#b4004e",
      contrastText: "#f5f5f5" /* テキストカラー(白) */
    }
  }
});
export default theme;
