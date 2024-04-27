import { createTheme } from "@mui/material";

export const colors = [
  "#F49D6E",
  "#E85A4F",
  "#FFD166",
  "#8ABEB7",
  "#247BA0",
  "#D3D3D3",
];

const theme = createTheme({
  palette: {
    mode: "light",
    // primary: { main: "#BEA4FF" },
    primary: { main: "#0CAFFF" },
    background: {
      default: "#FFF",
    },
  },
  components: {
    MuiIconButton: {
      defaultProps: {
        size: "small",
      },
    },
  },
  typography: {
    // fontFamily: "Lato  ",
    // fontFamily: "Space Mono",
    fontFamily: "Inconsolata",
    button: {
      textTransform: "unset",
      fontWeight: 600,
    },
    h6: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default theme;
