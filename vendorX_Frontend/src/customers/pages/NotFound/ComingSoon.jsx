import InfoPage from "./InfoPage";
import BuildIcon from "@mui/icons-material/Build";

const ComingSoon = () => {
  return (
    <InfoPage
      icon={BuildIcon}
      title="🚧 Coming Soon"
      message="This feature is under construction. Stay tuned!"
    />
  );
};

export default ComingSoon;
