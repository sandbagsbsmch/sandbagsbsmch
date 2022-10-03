import { Button } from "@mui/material";
import FilePresentIcon from "@mui/icons-material/FilePresent";
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

const StyledButton = (props) => {
  const file = require(`../../Assets/subjects/${props.subjectId}/${props.file.name}`);
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = props.file.name;
    link.href = file;
    link.click();
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          onClick={onDownload}
          sx={{ borderRadius: 2, marginTop: "2vh" }}
          variant="contained"
        >
          <FilePresentIcon sx={{ marginLeft: "1vw" }} fontSize="medium" />
          <Typography
            variant="h6"
            noWrap
            dir="rtl"
            sx={{ flexGrow: 1, alignSelf: "flex-end" }}
          >
            {props.file.name.split(".")[0]}
          </Typography>
        </Button>
      </ThemeProvider>
    </div>
  );
};
export default StyledButton;
