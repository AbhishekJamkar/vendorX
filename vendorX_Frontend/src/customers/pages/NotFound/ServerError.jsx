import InfoPage from "./InfoPage";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { useNavigate } from "react-router-dom";

const ServerError = () => {
  const navigate = useNavigate();

  return (
    <InfoPage
      icon={ReportProblemIcon}
      title="500 - Server Error"
      message="Oops! Something went wrong on our end. Please try again later."
      buttonText="Try Again"
      onClick={() => window.location.reload()}
    />
  );
};

export default ServerError;
