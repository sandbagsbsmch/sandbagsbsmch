import { Typography } from "@mui/material";
import DocxButton from "../Components/DocxButton";
import PitButton from "./PitButton";
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
      {props.hasPit && <PitButton subjectId={props.subjectId} />}
    </div>
  );
};

export default FileList;
