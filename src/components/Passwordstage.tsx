import { useState } from "react";
import ContinueButton from "./ContinueButton";
import InputComponent from "./InputComponent";
import { FormikProps } from "formik";
import { passwordSchema, repeatPasswordSchema } from "./Validationschema";
import { ValidationError } from "yup";
type CenterFormValues = {
  Username: string;
  Email: string;
  Password: string;
  "Repeat Password": string;
  toggle: string;
};
interface InputProps {
  password: string;
  repass: string;
  handlestate: () => void;
  fik: FormikProps<CenterFormValues>;
}

function Passwordstage({ password, repass, handlestate, fik }: InputProps) {
  const [buttonstatepass, setButtonstatepass] = useState<boolean>(true);
  const [passwordError, setpasswordError] = useState<string>("");
  const [repeatPasswordError, setrepeatPasswordError] = useState<string>("");
  const [hasError, sethasError] = useState<boolean>(true);

  const handleSubmit = () => {
    if (!hasError) {
      setButtonstatepass(true);
      handlestate();
    }
  };

  const handleValidation = async () => {
    try {
      await passwordSchema.validate(fik.values);
      setpasswordError("");
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        const validationError = error as ValidationError;
        setpasswordError(validationError.message);
        sethasError(true);
      }
    }

    try {
      await repeatPasswordSchema.validate(fik.values);
      setrepeatPasswordError("");
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        const validationError = error as ValidationError;
        setrepeatPasswordError(validationError.message);
        sethasError(true);
      }
    }
    if (passwordError === "" && repeatPasswordError === "") {
      sethasError(false);
      setButtonstatepass(true);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center p-4 d1">
      <InputComponent
        namevalue={password}
        fik={fik}
        error={passwordError}
        onChange={handleValidation}
      />
      <InputComponent
        namevalue={repass}
        fik={fik}
        error={repeatPasswordError}
        onChange={handleValidation}
      />
      s
      {buttonstatepass ? (
        <ContinueButton handlestate={handleSubmit} color="2" />
      ) : (
        <ContinueButton handlestate={() => {}} color="6" />
      )}
    </div>
  );
}

export default Passwordstage;
