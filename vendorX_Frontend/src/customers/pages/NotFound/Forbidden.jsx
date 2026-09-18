import InfoPage from "./InfoPage";
import BlockIcon from "@mui/icons-material/Block";
import { useNavigate } from "react-router-dom";

const Forbidden = () => {
  const navigate = useNavigate();

  return (
    <InfoPage
      icon={BlockIcon}
      title="403 - Forbidden"
      message="You don't have permission to access this page."
      buttonText="Go Back"
      onClick={() => navigate(-1)}
    />
  );
};

export default Forbidden;
