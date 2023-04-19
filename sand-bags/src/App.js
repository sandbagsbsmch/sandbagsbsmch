import SubjectPage from "./Views/SubjectPage";
import HomePage from "./Views/HomePage";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import packageJson from "../package.json";
import "./Views/Font.css";

const THEME = createTheme({
  typography: {
    fontFamily: `'Assistant', sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function App() {
  return (
    <div>
      {/*  */}
      <ThemeProvider theme={THEME}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/subject/:subjectId" element={<SubjectPage />} />
          </Routes>
        </HashRouter>
        <footer
          style={{
            position: "absolute",
            margin: "-22px auto",
            right: 0,
          }}
        >
          {packageJson.version} צוות שקי חול, גרסה
        </footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
