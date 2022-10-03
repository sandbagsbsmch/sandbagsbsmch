import { Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HelpIcon from "@mui/icons-material/Help";
import { useState } from "react";
const theme = createTheme({
  palette: {
    primary: {
      main: "#E4E4E4",
      dark: "#E4E4E4",
    },
  },
});

const PitButton = (props) => {
  const [showPit, changeShowPit] = useState(false);

  const onDownload = () => {
    const file = require(`../Assets/subjects/${props.subjectId}/pit.zip`);
    const link = document.createElement("a");
    link.download = "pit.zip";
    link.href = file;
    link.click();
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          onClick={() => {
            showPit ? onDownload() : changeShowPit(true);
          }}
          sx={{ borderRadius: 2, marginTop: "2vh" }}
          variant="contained"
        >
          {!showPit ? (
            <>
              <HelpIcon sx={{ marginLeft: "1vw" }} fontSize="medium" />
              <Typography
                variant="h6"
                noWrap
                dir="rtl"
                sx={{ flexGrow: 1, alignSelf: "flex-end" }}
              >
                לחץ בשביל לחשוף פתרון
              </Typography>
            </>
          ) : (
            <>
              <VerifiedIcon sx={{ marginLeft: "1vw" }} fontSize="medium" />
              <Typography
                variant="h6"
                noWrap
                dir="rtl"
                sx={{ flexGrow: 1, alignSelf: "flex-end" }}
              >
                pit.zip
              </Typography>
            </>
          )}
        </Button>
      </ThemeProvider>
    </div>
  );
};
export default PitButton;
