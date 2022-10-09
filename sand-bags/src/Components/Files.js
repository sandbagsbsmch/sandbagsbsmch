import { Typography } from "@mui/material";
import DocxButton from "./Buttons/DocxButton";
import LinkButton from "./Buttons/LinkButton";
import PitButton from "./Buttons/PitButton";
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
      {props.formLink !== "" && <LinkButton formLink={props.formLink} />}
      {props.hasPit && <PitButton subjectId={props.subjectId} />}
    </div>
  );
};

export default FileList;
