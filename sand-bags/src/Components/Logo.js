import logo from "../Assets/logo.png";
import { Typography } from "@mui/material";
const Logo = () => {
  return (
    <>
      <img className="logo" src={logo} alt="bsmch logo" />
      <Typography
        align="center"
        color="common.white"
        variant="h3"
        component="div"
        dir="rtl"
      >
        בסמח - מסלול אלפא
      </Typography>
      <Typography
        align="center"
        color="common.white"
        variant="h4"
        sx={{ marginTop: "1vh" }}
        component="div"
        dir="rtl"
      >
        קורס תכנות
      </Typography>
    </>
  );
};

export default Logo;
