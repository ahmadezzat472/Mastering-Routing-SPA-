import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import Textarea from "../components/ui/Textarea";

const Contribute = () => {
  // ** Returns the current location object, which represents the current URL in web browsers.
  const location = useLocation();
  console.log(location);

  return (
    <>
      {location.state?.email && <h2 className="text-center mb-3">Email: {location.state.email}</h2>}
      <h2 className="text-center mb-3">Issue: 🐛 Bug Report</h2>
      <form className="space-y-3 max-w-sm mx-auto">
        <Textarea />

        <Button>Submit new issue</Button>
      </form>
    </>
  );
};

export default Contribute;
