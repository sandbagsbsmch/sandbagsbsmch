import { Button } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#E4E4E4",
      dark: "#E4E4E4",
    },
  },
});

const LinkButton = ({ formLink }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          onClick={() => {
            window.open(formLink, "_blank").focus();
          }}
          sx={{ borderRadius: 2, marginTop: "2vh" }}
          variant="contained"
        >
          <LinkIcon sx={{ marginLeft: "1vw" }} fontSize="medium" />
          <Typography
            variant="h6"
            noWrap
            dir="rtl"
            sx={{ flexGrow: 1, alignSelf: "flex-end" }}
          >
            שאלות הבנה
          </Typography>
        </Button>
      </ThemeProvider>
    </div>
  );
};
export default LinkButton;
