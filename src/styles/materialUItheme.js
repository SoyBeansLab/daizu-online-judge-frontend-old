import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  overrides: {
    typography: {
      fontFamily: ["Noto Sans JS", "sans-serif"].join(","),
    },
  },
  palette: {
    /* メインカラー */
    primary: {
      light: "#FFFFFE",
      main: "#F9F4EF",
      dark: "#716040",
      contrastText: "#151C40" /* テキストカラー(黒) */,
    },
    /* アクセントカラー */
    secondary: {
      light: "#ff77a9",
      main: "#EF6357",
      dark: "#d1564b",
      contrastText: "#FFFFFE" /* テキストカラー(白) */,
    },
    judgeStatusColor: {
      correct: "#00897b",
      wrong: "#EF6357",
      other: "#e0e0e0",
    },
  },
});
export default theme;
