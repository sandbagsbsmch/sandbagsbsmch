import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import DescriptionIcon from "@mui/icons-material/Description";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { HashLink } from "react-router-hash-link";

const CardList = () => {
  const info = {
    file: require(`../Assets/subjects/info/הבהרות.docx`),
    name: "הבהרות.docx",
  };

  const luz = {
    file: require(`../Assets/subjects/info/לוז.xlsx`),
    name: "לוז.xlsx",
  };

  const extra = {
    file: require(`../Assets/subjects/extra/Extra.docx`),
    name: "Extra.docx",
  };

  const onDownload = ({ name, file }) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = file;
    link.click();
  };

  return (
    <Grid container direction="row-reverse" columns={{ xs: 3, sm: 6, md: 9 }}>
      <Grid sx={{ mt: "2vh" }} item xs={3} sm={3} md={3}>
        <Card
          elevation={6}
          sx={{
            height: "100%",
            mr: "2vw",
            ml: "2vw",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <HelpCenterIcon className="defColor" sx={{ fontSize: 60 }} />
            <Typography
              dir="rtl"
              variant="h5"
              color="text.primary"
              gutterBottom
            >
              הבהרות
            </Typography>
            <Typography align="center" dir="rtl" variant="body1">
              מצורפים מספר הבהרות שתצטרכו לקרוא לפני שתתחילו לעבור על חומרי
              הלימוד
            </Typography>
            <Button
              sx={{ mt: "1vh" }}
              className="backColor"
              variant="contained"
              onClick={() => {
                onDownload(info);
              }}
            >
              לחץ כדי להוריד את ההבהרות
            </Button>
            <Button
              sx={{ mt: "1vh" }}
              className="backColor"
              variant="contained"
              onClick={() => {
                onDownload(luz);
              }}
            >
              לחץ כדי להוריד לו"ז מומלץ
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid sx={{ mt: "2vh" }} item xs={3} sm={3} md={3}>
        <Card
          elevation={6}
          sx={{
            height: "100%",
            mr: "2vw",
            ml: "2vw",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <DescriptionIcon className="defColor" sx={{ fontSize: 60 }} />
            <Typography
              dir="rtl"
              variant="h5"
              color="text.primary"
              gutterBottom
            >
              חומרי לימוד
            </Typography>
            <Typography align="center" dir="rtl" variant="body1">
              מצורפים חומרי לימוד אותם עליכם ללמוד טרם ההגעה לקורס
            </Typography>
            <Button
              sx={{ mt: "1vh" }}
              className="backColor"
              variant="contained"
            >
              <HashLink className="alink" to="/#subjects">
                לחץ כדי לעבור לחומר
              </HashLink>
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid sx={{ mt: "2vh" }} item xs={3} sm={3} md={3}>
        <Card
          elevation={6}
          sx={{
            height: "100%",
            mr: "2vw",
            ml: "2vw",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <PsychologyIcon className="defColor" sx={{ fontSize: 60 }} />
            <Typography
              dir="rtl"
              variant="h5"
              color="text.primary"
              gutterBottom
            >
              אקסטרה
            </Typography>
            <Typography dir="rtl" align="center" variant="body1">
              לאחר סיום כל התכנים של שקי חול תוכלו לעבור על אקסטרות נוספות לפני
              ההגעה לקורס
            </Typography>
            <Button
              className="backColor"
              sx={{ mt: "1vh" }}
              variant="contained"
              onClick={() => {
                onDownload(extra);
              }}
            >
              לחץ כאן כדי להוריד את האקסטרה
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardList;
