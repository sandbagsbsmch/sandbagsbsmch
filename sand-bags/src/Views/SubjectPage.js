import PhoneSubjectPage from "../Components/PhoneSubjectPage";
import ComputerSubjectPage from "../Components/ComputerSubjectPage";
import useWindowDimesions from "../Hooks/useWindowDimensions";

const SubjectPage = (props) => {
  const { width } = useWindowDimesions();

  return width > 1000 ? <ComputerSubjectPage /> : <PhoneSubjectPage />;
};

export default SubjectPage;
