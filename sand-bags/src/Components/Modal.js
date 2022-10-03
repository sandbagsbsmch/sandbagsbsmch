import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { HashLink as Link } from "react-router-hash-link";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { finishSubject } from "../utils/localStorageManager";
import confetti from "canvas-confetti";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import useWindowDimesions from "../Hooks/useWindowDimensions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ subjectId }) {
  const { width } = useWindowDimesions();

  const calculatedCycle = `${new Date().getFullYear().toString().substring(2)}${
    new Date().getMonth() > 5 ? "B" : "A"
  }`;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  };
  return (
    <div>
      <Button
        size="large"
        onClick={handleOpen}
        endIcon={<QuestionMarkIcon />}
        sx={{
          fontSize: "20px",
          backgroundColor: "#C6FFC8",
          color: "black",
        }}
        variant="contained"
        color="success"
      >
        איך להגיש את הפרוייקט
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: width < 800 ? "80vw" : "40vw" }}>
          <Typography
            dir="rtl"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            איך להגיש את הפרוייקט?
          </Typography>
          <Typography dir="rtl" id="modal-modal-description" sx={{ mt: 2 }}>
            עליכם להגיש את התרגיל המסכם בשקי חול. ללא שאר התרגולים שהיו לאורך
            הקורס הרשתי אלא רק את התרגול המסכם. את הקובץ הסופי אתם מגישים
            באמצעות שליחתו למייל הבא: <strong>bsmchmalshab@gmail.com.</strong>
            <br></br>שימו לב לבדוק את עצמכם ולהגיש פעם אחת בלבד כאשר אתם בטוחים
            בתשובה שלכם.<br></br> את המייל תשלחו בפורמט אחיד כך שנושא המייל יראה
            כך: <br />{" "}
            <strong>
              {calculatedCycle} - שקי חול : {"{שמכם המלא}"}
            </strong>
          </Typography>
          <Box sx={{ mt: "2vh" }}>
            <Button
              endIcon={<CheckBoxOutlinedIcon />}
              sx={{
                backgroundColor: "#C6FFC8",
                color: "black",
              }}
              onClick={addToFinishedItem}
              variant="contained"
            >
              <Link className="noStyle" to={"/"}>
                הגשתי למייל את הפרוייקט
              </Link>
            </Button>
            <Button
              endIcon={<CheckBoxOutlinedIcon />}
              sx={{
                ml: "2vw",
                backgroundColor: "#fcb0b0",
                color: "black",
              }}
              onClick={handleClose}
              variant="contained"
            >
              לא משנה
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
