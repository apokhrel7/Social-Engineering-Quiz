import * as React from "react";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { createMuiTheme } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";

const theme = createMuiTheme({
  typography: {
    fontSize: 18,
    fontFamily: "Arial",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: "white",
  padding: theme.spacing(3),
  textAlign: "Center",
  fontsize: "60",
  boxShadow: "4px 4px lightblue",
  borderRadius: 7,
}));

function Question3() {
  return (
    <Item>
      <ThemeProvider theme={theme}>
        <Typography style={{ fontWeight: 600 }}>
          Is this the actual Gmail login page or are you being scammed?
        </Typography>
      </ThemeProvider>
    </Item>
  );
}
export default Question3;
