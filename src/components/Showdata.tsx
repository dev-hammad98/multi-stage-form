import ContinueButton from "./ContinueButton";
import Showbox from "./Showbox";
import { FormikProps } from "formik";

type CenterFormValues = {
  Username: string;
  Email: string;
  Password: string;
  "Repeat Password": string;
  toggle: string;
};
interface InputProps {
  handlestate: () => void;
  tooglestate: string;
  fik: FormikProps<CenterFormValues>;
}

function Showdata({ handlestate, fik, tooglestate }: InputProps) {
  const handleSubmit = () => {
    handlestate();
  };
  return (
    <div className="d-flex flex-column align-items-center p-4 d1">
      <Showbox label="Username" value={fik.values.Username} />
      <Showbox label="Email" value={fik.values.Email} />
      <Showbox label="Country" value={tooglestate} />
      <ContinueButton handlestate={handleSubmit} color={"2"} />
    </div>
  );
}

export default Showdata;
