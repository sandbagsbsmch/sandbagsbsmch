import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { HashLink as Link } from "react-router-hash-link";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import useWindowDimesions from "../Hooks/useWindowDimensions";
import {
  readInfo,
  getReadInfo,
} from "../utils/localStorageManager";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",

  p: 4,
};

const SubjectButton = ({ subject, id }) => {
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { width } = useWindowDimesions();
  const closedModal = () => {
    readInfo();
    handleClose();
  };

  const handleClick = () => {
    if (id === 0 && !getReadInfo()) {
      handleOpen();
    } else {
      navigate(`/subject/${subject}`)
    }
  };
  return (
    <div>
      <Button size="small" onClick={handleClick}>
        הכנס לנושא
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
            לפני שנתחיל
          </Typography>
          <Typography dir="rtl" id="modal-modal-description" sx={{ mt: 2 }}>
            לפני שתתחילו את המעבר על חומרי הקורס, יש לקרוא את ההבהרות והלוז
            המומלץ לעבודה
          </Typography>
          <Box sx={{ mt: "2vh" }}>
            <Button
              endIcon={<CheckBoxOutlinedIcon />}
              sx={{
                backgroundColor: "#C6FFC8",
                color: "black",
              }}
              onClick={closedModal}
              variant="contained"
            >
              <Link className="noStyle" to={"/subject/0"}>
                קראתי, אפשר להמשיך
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
              אקרא עכשיו
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default SubjectButton;
