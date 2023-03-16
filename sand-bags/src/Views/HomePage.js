import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./Gradient.css";
import Logo from "../Components/Logo";
import Grid from "@mui/material/Unstable_Grid2";
import DisplayCard from "../Components/displayCard";
import filesInfo from "../Assets/subjects/info.json";
import Xarrow, { Xwrapper } from "react-xarrows";
import { isSubjectFinished } from "../utils/localStorageManager";
import useWindowDimesions from "../Hooks/useWindowDimensions";
import CardList from "../Components/CardsList";

const HomePage = () => {
  const { width } = useWindowDimesions();
  const computedStartArrow = (index) => {
    let arrow = index % 2 === 1 ? "bottom" : "left";

    if (width <= 600) {
      arrow = "bottom";
    } else if (width >= 900) {
      arrow = index % 4 === 3 ? "bottom" : "left";
    }

    return arrow;
  };
  const computedEndArrow = (index) => {
    let arrow = index % 2 === 1 ? "top" : "right";

    if (width <= 600) {
      arrow = "bottom";
    } else if (width >= 900) {
      arrow = index % 4 === 3 ? "top" : "right";
    }

    return arrow;
  };
  return (
    <div id="home">
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
          pt: "5vh",
          pb: "10vh",
        }}
        className="gradient"
      >
        <Logo />
      </Box>
      <Box
        sx={{
          pt: "3vh",
          pb: "3vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardList />
      </Box>
      <Box
        className="gradient"
        sx={{
          pt: "4vh",
          pb: "4vh",
          height: "100%",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          clipPath: "polygon(0 2%, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <Typography
          sx={{ mt: "13vh" }}
          dir="rtl"
          variant="h2"
          color="common.white"
          gutterBottom
          id="subjects"
        >
          חומרי הלימוד
        </Typography>
        <Divider sx={{ mb: "2vh", width: "10%" }} variant="middle" />
        <Typography dir="rtl" align="center" variant="h4" color="common.white">
          חומרי הלימוד אותם תצטרכו ללמוד לפני ההגעה לקורס.
        </Typography>
        <Divider sx={{ mb: "2vh" }} variant="middle" />
        <Grid
          container
          disableEqualOverflow
          direction="row-reverse"
          sx={{ ml: "1.5vw", mr: "3vw", pb: "5vh" }}
          justifyContent="space-evenly"
          spacing={{ xs: 2, md: 5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Xwrapper>
            {filesInfo.map((file, index) => (
              <Grid className={"hoverable"} xs={4} sm={4} md={3} key={index}>
                <DisplayCard
                  id={index}
                  subject={index}
                  file={file}
                  isFinished={isSubjectFinished(index)}
                />
                {index !== filesInfo.length - 1 ? (
                  <Xarrow
                    headSize={4}
                    color="#E4E4E4"
                    dashness={true}
                    startAnchor={computedStartArrow(index)}
                    endAnchor={computedEndArrow(index)}
                    start={index + ""}
                    end={index + 1 + ""}
                  />
                ) : (
                  ""
                )}
              </Grid>
            ))}
          </Xwrapper>
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
