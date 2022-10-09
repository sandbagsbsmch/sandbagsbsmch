import TopBar from "../Components/TopBar";
import Image from "mui-image";
import { useState } from "react";
import { Button, Divider, Grid } from "@mui/material";
import FileList from "../Components/Files";
import { useParams } from "react-router-dom";
import filesInfo from "../Assets/subjects/info.json";
import { HashLink as Link } from "react-router-hash-link";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import "../Components/youtube.css";
import { finishSubject } from "../utils/localStorageManager";
import confetti from "canvas-confetti";
import IFrame from "react-awesome-iframe";
import Modal from "../Components/Modal";
import { useNavigate } from "react-router-dom";

const ComputerSubjectPage = (props) => {
  let { subjectId } = useParams();
  let navigate = useNavigate();
  const currFile = filesInfo[parseInt(subjectId)];
  const [page] = useState(1);

  const addToFinishedItem = () => {
    finishSubject(subjectId);
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2,
      },
    });
    navigate("/");
  };

  return (
    <div>
      <TopBar>
        <strong> {`${parseInt(subjectId) + 1}. ${currFile.name}`} </strong>
      </TopBar>
      <Grid container sx={{ marginTop: "3vh" }} spacing={2}>
        <Grid item xs={3}>
          <div dir="rtl">
            <FileList
              formLink={currFile.formLink}
              subjectId={subjectId}
              hasPit={currFile.hasPit}
              files={currFile.files}
            />
          </div>
        </Grid>
        <Divider
          sx={{ height: "60vh", marginLeft: "3vw" }}
          orientation="vertical"
        />

        <Grid justifyContent="center" item xs={7}>
          {currFile.media.length > 0 ? (
            <IFrame
              className="computerFrame"
              src={`https://www.youtube.com/embed/${
                currFile.media[page - 1]?.id
              }`}
              frameBorder="0"
              allowFullScreen
              loadingText={"...טוען סרטון"}
              title="Embedded youtube"
              loading="true"
            />
          ) : (
            <Image
              width="100%"
              height="450px"
              src={require(`../Assets/subjects/${parseInt(
                subjectId
              )}/display.jpg`)}
              duration={0}
            ></Image>
          )}
        </Grid>

        <Grid container justifyContent="center">
          {currFile.isEnd ? (
            <Modal subjectId={subjectId} />
          ) : (
            <Button
              size="large"
              endIcon={<CheckBoxOutlinedIcon />}
              sx={{
                fontSize: "20px",
                backgroundColor: "#C6FFC8",
                color: "black",
              }}
              onClick={addToFinishedItem}
              variant="contained"
              color="success"
            >
              <Link className="noStyle" to={"/"}>
                סיימתי את הנושא
              </Link>
            </Button>
          )}
        </Grid>
        <Button sx={{ ml: "15vh", fontSize: "20px" }}>
          <Link to={"/#subjects"}>לחץ כאן כדי לחזור אחורה</Link>
        </Button>
      </Grid>
    </div>
  );
};

export default ComputerSubjectPage;
