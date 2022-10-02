import { Typography } from "@mui/material";
import DocxButton from "../Components/DocxButton";

const FileList = (props) => {
  return (
    <div>
      <Typography variant="h4" sx={{ paddingBottom: "2vh" }} component="h2">
        <strong>מסמכים נוספים</strong>
      </Typography>
      {props.files.map((file) => (
        <DocxButton
          key={file.name}
          style={{ marginTop: "2vh" }}
          subjectId={props.subjectId}
          file={file}
        />
      ))}
    </div>
  );
};

export default FileList;
