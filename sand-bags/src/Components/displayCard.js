import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { isSubjectFinished } from "../utils/localStorageManager";
import { useNavigate } from "react-router-dom";
import Image from "../Assets/Untitled.png";
import { styled } from "@mui/system";
import BadgeUnstyled, { badgeUnstyledClasses } from "@mui/base/BadgeUnstyled";
import alertify from "alertifyjs";
const StyledBadge = styled(BadgeUnstyled)(
  ({ theme }) => `
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    top: -10px;
    min-width: 22px;
    height: 22px;
    padding: 0 6px;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
    white-space: nowrap;
    text-align: center;
    border-radius: 12px;
    color: black;
    background: #E4E4E4;
    position: absolute;  
    right: 0;  
    z-index: 1;

  }
  `
);

export default function MediaCard({ subject, file, id, isFinished }) {
  let navigate = useNavigate();
  return (
    <StyledBadge
      sx={{ width: "100%", height: "100%" }}
      badgeContent={`.${id + 1}`}
      color="primary"
    >
      <Card
        className={isFinished ? "grayed" : ""}
        id={id}
        sx={{ width: "100%", height: "100%" }}
      >
        <CardMedia component="img" height="100" image={Image} alt="binary" />
        <CardContent dir="rtl">
          <Typography gutterBottom variant="h5" component="div">
            {file.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {file.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() =>
              isSubjectFinished(id - 1)
                ? navigate(`/subject/${subject}`)
                : alertify.message(
                    "יש לסיים את הנושא הקודם לפני שתוכלו לעבור לנושא הבא"
                  )
            }
          >
            הכנס לנושא
          </Button>
        </CardActions>
      </Card>
    </StyledBadge>
  );
}
